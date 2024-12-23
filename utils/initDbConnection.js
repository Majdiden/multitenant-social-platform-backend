import mongoose from "mongoose";
import tenantSchema from "../schemas/tenant.js";
import tenantUserSchema from "../schemas/tenantUser.js";
import userSchema from "../schemas/store/user.js";
import productSchema from "../schemas/store/product.js";

const clientOptions = {
  socketTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("debug", true);
const initAdminDbConnection = async (DB_URL) => {
  try {
    const db = mongoose.createConnection(DB_URL, clientOptions);
    db.on("error", (error) => {
      console.log("Admin db error: ", error);
    });
    db.once("open", () => {
      console.log("Admin DB connected successfully");
    });
    await db.model("Tenant", tenantSchema);
    await db.model("TenantUser", tenantUserSchema);
    return db;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const initTenantDbConnection = async (DB_URL, dbName) => {
  try {
    const db = mongoose.createConnection(DB_URL, clientOptions);
    db.on("error", (error) => {
      console.log(`Tenant ${dbName} db error: `, error);
    });
    db.once("open", () => {
      console.log(`Tenant connection for ${dbName} MongoDB Connection ok!`);
    });

    await db.model("User", userSchema);
    await db.model("Product", productSchema);
    return db;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { initAdminDbConnection, initTenantDbConnection };
