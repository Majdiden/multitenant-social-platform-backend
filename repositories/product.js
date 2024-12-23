const mainSchemaName = "Product";

const getProductsRepo = async (
  dbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .find(findQuery)
    .select(selectQuery)
    .lean()
    .populate("category");
  return data;
};

const getAProductRepo = async (
  dbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .findOne(findQuery)
    .select(selectQuery)
    .lean()
    .populate("category");
  return data;
};

const addAProductRepo = async (dbConnection, tenantData, session = null) => {
  const sessionOption = {};
  if (session) sessionOption.session = session;
  const data = await dbConnection
    .model(mainSchemaName)
    .create([tenantData], sessionOption);
  return data[0];
};

const updateAProductRepo = async (
  dbConnection,
  findQuery = {},
  updateQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .updateOne(findQuery, updateQuery);
  return data;
};

const deleteAProductRepo = async (
  dbConnection,
  findQuery = {},
  deleteQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .deleteOne(findQuery, deleteQuery);
  return data;
};

export {
  getProductsRepo,
  getAProductRepo,
  addAProductRepo,
  updateAProductRepo,
  deleteAProductRepo,
};
