'use strict';

const {
  formatBytes,
  camelToSentence
} = require('../libs/utils');

const helper = {
  formatBytes: formatBytes,
  camelToSentence: camelToSentence
};

/**
 * Init route, run this before every route
 */
const init = (req, res, next) => {
  res.locals.helper = helper;
  next();
}

module.exports = {
  init
};