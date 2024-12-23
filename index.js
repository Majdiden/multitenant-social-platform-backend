import ExpressConfig from "./server/express.config.js";
import MiddlewareConfig from "./server/middleware.config.js";
import RouteConfig from "./server/route.config.js";
import "dotenv/config";
import { connectAllDb } from "./utils/connectionManager.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = ExpressConfig();
app.use(cookieParser());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
MiddlewareConfig(app);
RouteConfig(app);
connectAllDb();
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port: ${PORT}`);
});
