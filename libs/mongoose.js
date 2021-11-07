'use strict';

// External libs
const mongoose = require('mongoose');
const {
    isObject,
    isNumber
} = require('lodash');
const Admin = mongoose.mongo.Admin;

// Internal libs
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

/**
 * Create connection
 */
const createConnection = () => {
    return new Promise((resolve, reject) => {
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect('mongodb+srv://tosa_admin:RlsNq4BtXH415FwS@a7dj87.4qc62.mongodb.net/admin?retryWrites=true&w=majority', { useNewUrlParser: true });
        // mongoose.connect('mongodb+srv://' + dbUser + ':' + dbPass + '@' + dbHost + '/' + dbName + '?retryWrites=true&w=majority', { useNewUrlParser: true });
        mongoose.connection
            .on('error', console.error.bind(console, 'connection errors:'))
            .once('open', function() {
                console.log('Database connected!!');
            });
    });
};

/**
 * CURD functions
 */
const findAll = async(model, where = {}, fields = '', limit = 100, sorts = { _id: -1 }) => {
    return new Promise((resolve, reject) => {
        // Checking
        if (!isObject(where)) {
            reject("Find conditions is not an object");
        }
        if (isObject(fields)) {
            reject("Fields should not an object, use string with space instead");
        }
        if (!isNumber(limit)) {
            reject("Limit should be a number");
        }
        if (!isObject(sorts)) {
            reject("Sort conditions is not an object");
        }

        // Build query
        const query = model.find(where);
        query
            .select(fields)
            .limit(limit)
            .sort(sorts);

        // Execute query
        query.exec(function(err, result) {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
};

/**
 * System functions
 */

/**
 * Get all database names
 */
const getAllDB = async() => {
    return new Promise((resolve, reject) => {
        const dbs = mongoose.connections[0];
        new Admin(dbs.db).listDatabases(function(err, results) {
            resolve(results.databases);
        });
    });
}

module.exports = {
    createConnection,
    findAll,
    getAllDB
};
