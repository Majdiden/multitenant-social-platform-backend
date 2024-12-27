import mongoose from "mongoose";
const mainSchemaName = "Tenant";

const getTenantsRepo = async (
  adminDbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await adminDbConnection
    .model(mainSchemaName)
    .find(findQuery)
    .select(selectQuery)
    .lean();
  return data;
};

const getATenantRepo = async (
  adminDbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await adminDbConnection
    .model(mainSchemaName)
    .findOne(findQuery)
    .select(selectQuery)
    .lean();
  return data;
};

const addATenantRepo = async (
  adminDbConnection,
  tenantData,
  session = null
) => {
  const sessionOption = {};
  tenantData.dbUri = `${process.env.TENANT_DB_URI}/${tenantData.name}`;
  if (session) sessionOption.session = session;
  const data = await adminDbConnection
    .model(mainSchemaName)
    .create([tenantData], sessionOption);
  return data[0];
};

const updateATenantRepo = async (
  adminDbConnection,
  findQuery = {},
  updateQuery = {}
) => {
  const data = await adminDbConnection
    .model(mainSchemaName)
    .updateOne(findQuery, updateQuery);
  return data;
};

export { getTenantsRepo, getATenantRepo, addATenantRepo, updateATenantRepo };
