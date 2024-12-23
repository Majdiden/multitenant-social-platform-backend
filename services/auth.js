import { signJWT } from "../utils/misc.js";

const loginService = async (userData) => {


  const accessToken = signJWT({
    userId: userData._id.toString(),
    tenantDomain: userData.domain,
  });

  return {
    success: true,
    statusCode: 200,
    message: `Logged In Successfully`,
    responseObject: {
      accessToken,
      userId: userData._id.toString(),
      tenantId: userData.name.toString(),
    },
  };
};

export { loginService };
