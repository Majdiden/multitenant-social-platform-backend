import { loginService } from "../services/auth.js";
import { addATenantService } from "../services/tenant.js";
import { getAdminConnection, getConnectionForTenant } from "../utils/connectionManager.js";
import { getAUser } from "../services/user.js";
import {
  addAChannelRepo
} from "../repositories/channel.js";

export const loginController = async (req, res) => {
  const user = await getAUser(req);
  console.log("user", user);
  user.responseObject.data.domain = req.body.domain;
  const serviceFnResponse = await loginService(user.responseObject.data);
  res.status(serviceFnResponse.statusCode).json({ ...serviceFnResponse });
};

export const addATenantController = async (req, res) => {
  const adminConnection = await getAdminConnection();
  const serviceFnResponse = await addATenantService(adminConnection, req.body);
  const tenantConnection = await getConnectionForTenant(serviceFnResponse.responseObject.tenantName);
  await addAChannelRepo(tenantConnection, {
    name: "General Channel",
    type: "text",
    serverId: serviceFnResponse.responseObject.tenantId
  })
  console.log(serviceFnResponse);

  res.status(serviceFnResponse.statusCode).json({ ...serviceFnResponse });
};

export const getUserInfoController = async (req, res) => {
  const response = await getAUser(req);
  res.status(response.statusCode).json({ ...response });
};
