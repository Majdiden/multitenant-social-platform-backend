const mainSchemaName = "Channel";

const getChannelsRepo = async (
  dbConnection,
  selectQuery = {},
  findQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .find(findQuery)
    .select(selectQuery)
    .lean()
  return data;
};

const getAChannelRepo = async (
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

const addAChannelRepo = async (dbConnection, tenantData, session = null) => {
  const sessionOption = {};
  if (session) sessionOption.session = session;
  const data = await dbConnection
    .model(mainSchemaName)
    .create([tenantData], sessionOption);
  return data[0];
};

const updateAChannelRepo = async (
  dbConnection,
  findQuery = {},
  updateQuery = {}
) => {
  const data = await dbConnection
    .model(mainSchemaName)
    .updateOne(findQuery, updateQuery);
  return data;
};

const deleteAChannelRepo = async (
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
  getChannelsRepo,
  getAChannelRepo,
  addAChannelRepo,
  updateAChannelRepo,
  deleteAChannelRepo,
};
