import { loginService } from "../services/auth.js";
import { addATenantService } from "../services/tenant.js";
import { getAdminConnection } from "../utils/connectionManager.js";
import { getAUser } from "../services/user.js";

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
  console.log(serviceFnResponse);

  res.status(serviceFnResponse.statusCode).json({ ...serviceFnResponse });
};

export const getUserInfoController = async (req, res) => {
  const response = await getAUser(req);
  res.status(response.statusCode).json({ ...response });
};
