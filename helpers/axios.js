const axios = require('axios');

const request = async (config) => {
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        const { status, headers, data } = response;
        return resolve({
          status: true,
          code: status,
          headers,
          data,
        });
      })
      .catch(({ response = {} }) => {
        const { status, headers, data } = response;
        return resolve({
          status: false,
          code: status,
          headers,
          data,
        });
      });
  });
};

module.exports = {
  request,
};
