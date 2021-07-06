/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies

const mongoose = require('mongoose');

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DATABASE;

let connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.mqy3c.mongodb.net/${dbName}?retryWrites=true&w=majority`;
}
console.log('üüü++++==', connectionString)

mongoose.set('debug', true);
// mongodb+srv://erkaltufekci:<password>@${host}/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log);

module.exports = mongoose.connection;
