import mongoose from "mongoose";
import {
  initAdminDbConnection,
  initTenantDbConnection,
} from "./initDbConnection.js";
import { getTenantsRepo, getATenantRepo } from "../repositories/tenant.js";
import {
  setCacheConnection,
  getCacheConnection,
  getCacheValuesArr,
} from "./lruCacheManager.js";

let adminDbConnection;

export const connectAllDb = async () => {
  const ADMIN_DB_URI =
    "mongodb+srv://admin:admin@devdb01.cdzut.mongodb.net/Matjar?retryWrites=true&w=majority";
  adminDbConnection = await initAdminDbConnection(ADMIN_DB_URI);
  const allTenants = await getTenantsRepo(adminDbConnection);
  for (const tenant of allTenants) {
    const tenantConnection = initTenantDbConnection(tenant.dbUri, tenant.name);
    setCacheConnection(tenant.name, tenantConnection);
  }
};

export const getConnectionForTenant = async (tenantName) => {
  console.log(`Getting connection for tenant: ${tenantName} from cache`);
  let connection = await getCacheConnection(tenantName);
  console.log("connection", connection);
  if (!connection) {
    console.log(`Connection for tenant: ${tenantName} missing from cache`);
    const tenant = await getATenantRepo(
      adminDbConnection,
      { name: tenantName },
      { dbUri: 1, name: 1 }
    );
    console.log("tenant", tenant);
    if (tenant) {
      connection = initTenantDbConnection(tenant.dbUri, tenant.name);
      if (!connection) return null;
      console.log(`Connection for tenant: ${tenantName} added to cache`);
    } else {
      console.log(`No connection data for tenant: ${tenantName}`);
      return null;
    }
  }
  return connection;
};

export const getAdminConnection = () => {
  console.log("Getting admin connection");
  return adminDbConnection;
};

export const gracefulShutdown = async () => {
  console.log("Closing all database connections...");
  const connections = getCacheValuesArr();
  for (const connection of connections) {
    await connection.close();
  }
  if (adminDbConnection) {
    console.log("Closing admin database connection...");
    await adminDbConnection.close();
  }
  console.log("All database connections closed");
};

let isShutdownInProgress = false;
["SIGINT", "SIGTERM", "SIGQUIT", "SIGUSR2"].forEach((signal) => {
  process.on(signal, async () => {
    if (!isShutdownInProgress) {
      console.log(`Received ${signal}, gracefully shutting down...`);
      isShutdownInProgress = true;
      await gracefulShutdown();
      process.exit(0);
    }
  });
});
