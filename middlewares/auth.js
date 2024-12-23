import { getConnectionForTenant } from "../utils/connectionManager.js";
import { verifyJWT } from "../utils/misc.js";

export const databaseResolver = async (req, _, next) => {
  const urlArr = req.url.split("/");

  // Skip database resolution for login route
  // if (urlArr.includes("login")) return next();
  if (urlArr.includes("auth")) return next();
  if (urlArr.includes("products")) return next();

  const token = req.headers.authorization?.split(" ")[1];
  // Handle the logic for null checking and authorization
  const payloadData = verifyJWT(token);
  if (!payloadData) {
    return res.status(400).json({ message: "Invalid JWT" });
  }
  next();
};
