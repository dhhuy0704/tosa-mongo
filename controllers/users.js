'use strict';

const {
  isObject,
  isNumber,
  isNil
} = require('lodash');
const {
  isEmpty
} = require('ramda');
const Error = require('http-errors');

const { findAll } = require('../libs/mongoose');
const { UsersModel } = require('../models/users');
const { dataKeyPrefixes } = require('../config/constants');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const index = async (req, res, next) => {
  
}

// Basic CRUD

/**
 * C: Create - Insert
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const insert = async (req, res, next) => {
  res.status(200).send('Under construction')
}
const convertDataToPublic = (prefix, data = {}) => {
  if(isNil(data)) {
    return {};
  }
  if(!isObject(data)) {
    return {};
  }
  if(isEmpty(prefix)) {
    return {};
  }
  
  const result = data.map((item) => {
    const obj = item.toObject();
    console.log( item._id );
    for (const iterator of obj) {
    }
  });
  return data;
}
/**
 * R: Read - Get 'ZUE05F_email': 'tommydo@gmail.com'
 * URL: /users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const get = async (req, res, next) => {
  try {
    const prefix = dataKeyPrefixes.users;
    const data = await findAll(UsersModel, {}, '');
    const result = convertDataToPublic(prefix, data);
    res.status(200).send(result)
  } catch (e) {
    next(e);
  }
}

/**
 * U: Update
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const update = async (req, res, next) => {
  res.status(200).send('Under construction')
}

/**
 * D: Delete - Remove
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const remove = async (req, res, next) => {
  res.status(200).send('Under construction')
}

// Functional functions

const UserController = {
  index,
  get,
  insert,
  update,
  remove
};

module.exports = UserController;

