import { LRUCache } from "lru-cache";

const cacheOptions = {
  max: 5000,
  maxAge: 1000 * 60 * 60,
};

const cacheConnection = new LRUCache(cacheOptions);

const setCacheConnection = async (tenantName, dbConnetion) => {
  console.log("setting connection cache for: ", tenantName);
  return cacheConnection.set(tenantName, dbConnetion);
};

const getCacheConnection = async (tenantName) => {
  return cacheConnection.get(tenantName);
};

const getCacheValuesArr = async () => {
  return cacheConnection.values();
};

export { setCacheConnection, getCacheConnection, getCacheValuesArr };
