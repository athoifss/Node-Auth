const client = require("mongodb").MongoClient;

const _dbName = "Node-Auth";
const _User = "root";
const _Password = "housemd123";
const _Host = "127.0.0.1";

const url = `mongodb://${_User}:${_Password}@${_Host}/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`;

let _db;
function initDb(callback) {
  if (_db) {
    console.warn("Trying to init DB again!");
    return callback(null, _db);
  }

  client.connect(url, { useUnifiedTopology: true }, connected);

  function connected(err, db) {
    if (err) return callback(err);

    console.log("DB connected");
    _db = db.db(_dbName);
    return callback(null, _db);
  }
}

function getDbMongo() {
  return _db;
}

module.exports = {
  getDbMongo,
  initDb,
};
