const scheduler = require('node-schedule');
const loggerHelper = require('../helpers/logger');

const runDefaultCrons = async () => {
  try {
    scheduler.scheduleJob('* * * * *', () => {
      loggerHelper.info('Cron job run');
    });
  } catch (error) {
    loggerHelper.error(`Job scheduler error: ${error}`);
  }
};

runDefaultCrons();
