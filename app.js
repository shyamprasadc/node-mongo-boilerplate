const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const createError = require('http-errors');
const logger = require('./helpers/logger');
const errorHandler = require('./helpers/errorHandler');
const routes = require('./routes');

require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// handle security issues using cors and helmet
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(morgan('combined', { stream: logger.stream }));

app.use('/v1', routes);

// handle 404 not found
app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
