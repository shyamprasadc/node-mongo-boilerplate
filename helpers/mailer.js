const nodemailer = require('nodemailer');
const config = require('../config');
const loggerHelper = require('./logger');

const poolConfig = {
  pool: true,
  host: config.SMTP.HOST,
  port: config.SMTP.PORT,
  auth: {
    user: config.SMTP.USER,
    pass: config.SMTP.PASSWORD,
  },
  secureConnection: false,
  tls: { ciphers: 'SSLv3' },
};

const transporter = nodemailer.createTransport(poolConfig);

const sendMail = async (params) => {
  try {
    const mailOptions = {
      from: config.SMTP.FROM,
      to: params.to,
      subject: params.subject,
      html: params.html,
    };
    const info = await transporter.sendMail(mailOptions);
    loggerHelper.debug(`Email sent: ${info}`);
    console.log('Email sent: %s', info.messageId);
  } catch (ex) {
    loggerHelper.error(`[ERROR] Sending email: ${ex}`);
  }
};

module.exports = {
  sendMail,
};
