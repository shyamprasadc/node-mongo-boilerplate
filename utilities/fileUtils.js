const { v4: uuidV4 } = require('uuid');

const isImage = (data) => {
  const allowedImageMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/x-png',
    'image/png',
    'image/svg+xml',
    'image/*',
  ];
  return allowedImageMimeTypes.includes(data.mimetype);
};

const isVideo = (data) => {
  const allowedVideoMimeTypes = [
    'video/x-flv',
    'video/mp4',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-ms-wmv',
  ];
  return allowedVideoMimeTypes.includes(data.mimetype);
};

const isDocument = (data) => {
  const allowedDocMimeTypes = [
    'application/msword',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  return allowedDocMimeTypes.includes(data.mimetype);
};

const isCSV = (data) => {
  const allowedCSVMimeTypes = ['text/plain', 'text/x-csv', 'text/csv', 'application/vnd.ms-excel'];
  return allowedCSVMimeTypes.includes(data.mimetype);
};

const generateFileName = (data, prefix) => {
  let extension = data.mimetype.split('/')[1];
  if (data.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    extension = 'docx';
  }

  if (data.mimetype === 'application/msword') {
    extension = 'doc';
  }
  const fileName = `${prefix}${uuidV4()}.${extension}`;
  return fileName;
};

module.exports = {
  isImage,
  isVideo,
  isDocument,
  isCSV,
  generateFileName,
};
