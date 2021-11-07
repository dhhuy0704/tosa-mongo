'use strict';

const request = require('request');

const get = (url, headers) => {
  return new Promise(function(resolve, reject) {
    request.get({
      url,
      headers,
    }, function(error, response, body) {
      if (error) {
        return reject(error);
      }
      if (response.statusCode == 200) {
        resolve(body);
      } else {
        resolve(null);
      }
    });
  });
};

module.exports = {
  get
};
