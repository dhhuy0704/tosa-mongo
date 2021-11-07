'use strict';

// External libs
const { curry } = require('ramda');

// Internal libs
const {
  success,
  warning,
  error,
} = require('../config/messages');

/**
 * Get a message
 * type: success, warning, error
 */
const getMsg = curry((type, key) => {
  switch (type) {
    case 'success':
      return success[key];
    case 'warning':
      return warning[key];
    case 'error':
      return error[key];
  }
});

/**
 * Convert byte to higher format
 */
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Camelcase to sentence
 */
const camelToSentence = (str) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

module.exports = {
  getMsg,
  formatBytes,
  camelToSentence
};
