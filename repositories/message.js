const mainSchemaName = "Message";
const secondarySchemaName = "User";

const getMessagesRepo = async (
  dbConnection,
  findQuery = {},
  selectQuery = {},
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .find(findQuery)
    .sort({ createdAt: -1 })
      .limit(50)
      .populate({
        path: 'userId',
        model: secondarySchemaName,
        select: 'name'
      });
  return data;
};

const getAMessageRepo = async (
  dbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .findOne(findQuery)
    .select(selectQuery)
    .lean()
  return data;
};

const addAMessageRepo = async (dbConnection, tenantData, session = null) => {
  const sessionOption = {};
  if (session) sessionOption.session = session;
  const data = await dbConnection
    .model(mainSchemaName)
    .create([tenantData], sessionOption);
  return data[0];
};

const updateAMessageRepo = async (
  dbConnection,
  findQuery = {},
  updateQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .updateOne(findQuery, updateQuery);
  return data;
};

const deleteAMessageRepo = async (
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
  getMessagesRepo,
  getAMessageRepo,
  addAMessageRepo,
  updateAMessageRepo,
  deleteAMessageRepo,
};
