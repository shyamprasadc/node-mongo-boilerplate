const AWS = require('aws-sdk');
const config = require('../config');
const loggerHelper = require('./logger');

const S3 = new AWS.S3({
  accessKeyId: config.AWS.S3.ACCESS_KEY,
  secretAccessKey: config.AWS.S3.SECRET_ACCESS_KEY,
  region: config.AWS.S3.REGION,
});

const uploadFile = async (file, folder, fileName, acl = null) => {
  const params = {
    Body: file.data,
    Bucket: `${config.AWS.S3.BUCKET}/${folder}`,
    Key: fileName,
    ContentType: file.mimetype,
    ACL: acl ?? 'private',
  };

  return new Promise((resolve, reject) => {
    S3.upload(params, (error, response) => {
      if (error) {
        loggerHelper.error(`[ERROR] S3 upload error: ${error}`);
        return resolve({ status: false, data: null });
      }
      console.log(response);
      return resolve({ status: true, data: response });
    });
  });
};

const removeFile = async (fileName) => {
  let params = {
    Bucket: config.AWS.S3.BUCKET,
    Key: fileName,
  };
  return new Promise((resolve, reject) => {
    S3.deleteObject(params, (error, response) => {
      if (error) {
        loggerHelper.error(`[ERROR] S3 remove error: ${error}`);
        return resolve({ status: false, data: null });
      }
      console.log(response);
      return resolve({ status: true, data: response });
    });
  });
};

const getSignedUrl = async (fileName) => {
  let params = {
    Bucket: config.AWS.S3.BUCKET,
    Key: fileName,
    Expires: 10 * 60,
  };

  return new Promise((resolve, reject) => {
    S3.getSignedUrl('getObject', params, (err, url) => {
      if (err) {
        loggerHelper.error(`[ERROR] S3 signed url error: ${error}`);
        return resolve({ status: false, data: null });
      }
      console.log(url);
      return resolve({ status: true, data: url });
    });
  });
};

module.exports = {
  uploadFile,
  removeFile,
  getSignedUrl,
};
