import { getConnectionForTenant } from "../utils/connectionManager.js";
import { verifyJWT } from "../utils/misc.js";

export const databaseResolver = async (req, res, next) => {
  const urlArr = req.url.split("/");

  // Skip database resolution for register route
  if (urlArr.includes("register")) return next();

  const token = req.headers.authorization?.split(" ")[1];
  
  let dbConnection;
  try {
    if (urlArr.includes("login")) {
      console.log("in login");
      dbConnection = await getConnectionForTenant(req.body.name);
    } else if (urlArr.includes("products")) {
      const tenantName = urlArr[2];
      if (!tenantName) {
        return res.status(400).json({ message: "Tenant name not provided in URL" });
      }
      dbConnection = await getConnectionForTenant(tenantName);
    } else {
      console.log("in normal");
      if (!token) {
        return res.status(401).json({ message: "No authorization token provided" });
      }
      const payloadData = verifyJWT(token);
      if (!payloadData) {
        return res.status(401).json({ message: "Invalid token" });
      }
      dbConnection = await getConnectionForTenant(payloadData.tenantDomain);
      req.body.user = payloadData.userId;
    }

    if (!dbConnection) {
      return res.status(404).json({ message: "Tenant connection not found" });
    }

    req.dbConnection = dbConnection;
    next();
  } catch (error) {
    console.error("Database resolver error:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
