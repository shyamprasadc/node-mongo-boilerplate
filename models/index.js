const mongoose = require('mongoose');
const loggerHelper = require('../helpers/logger');
const { DB } = require('../config');

mongoose
  .connect(DB.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    loggerHelper.info('[DB] mongoose connection done');
  })
  .catch((e) => {
    loggerHelper.info('[DB] mongoose connection error');
    loggerHelper.error(e);
  });

mongoose.connection.on('connected', () => {
  loggerHelper.info('[DB] mongoose default connection open to ' + DB.CONNECTION);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  loggerHelper.error('[DB] mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  loggerHelper.info('[DB] mongoose default connection disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.info('[DB] mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
