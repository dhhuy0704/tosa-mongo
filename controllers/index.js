'use strict';

// Internal libs
const {
  getAllDB
} = require('../libs/mongoose');

const {
  formatBytes
} = require('../libs/utils');

/**
 * Index Page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const index = async (req, res, next) => {
  try {
      const title = {text: 'ToSa Mongo v1.0'};
      res.render('index', {title});
  } catch (e) {
      next(e);
  }
}

/**
 * Show all database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getAllDatabases = async (req, res, next) => {
  try {
      const title = {text: 'Databases list'};
      const dbList = await getAllDB();

      const dbs = [];
      for (const key in dbList) {
        if (Object.hasOwnProperty.call(dbList, key)) {
          delete dbList[key]['empty'];
          dbList[key]['sizeOnDisk'] = formatBytes(dbList[key]['sizeOnDisk']);
          dbs.push(dbList[key]);
        }
      }
      const data = {
        dbs: dbs,
      };
      res.render('dbs', {title, data});
  } catch (e) {
      next(e);
  }
}

const Controllers = {
  index,
  getAllDatabases
};

module.exports = Controllers;
