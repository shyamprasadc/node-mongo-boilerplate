const Dotenv = require('dotenv');

Dotenv.config({ silent: true });

module.exports = {
  APP: {
    PORT: process.env.APP_PORT || 3000,
    JOBS_PORT: process.env.APP_JOBS_PORT || 3001,
    BASE_URL: process.env.APP_BASE_URL,
  },
  DB: {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    CONNECTION: process.env.DB_CONNECTION,
    CONSTANTS: {
      USER_ROLE: {
        ADMIN: 1,
        CUSTOMER: 2,
      },
      USER_STATUS: {
        ACTIVE: 1,
        BLOCKED: 2,
      },
    },
  },
  JWT: {
    SECRET_KEY: process.env.JWT_SECRET_KEY,
    EXPIRY: process.env.JWT_EXPIRY,
  },
  SMTP: {
    HOST: process.env.SMTP_HOST,
    PORT: process.env.SMTP_PORT,
    USER: process.env.SMTP_USER,
    PASSWORD: process.env.SMTP_PASSWORD,
    FROM: process.env.SMTP_FROM,
  },
  AWS: {
    S3: {
      ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
      SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
      REGION: process.env.AWS_S3_REGION,
      BUCKET: process.env.AWS_S3_BUCKET,
      BUCKET_URL: process.env.AWS_S3_BUCKET_URL,
    },
  },
  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
  },
};
