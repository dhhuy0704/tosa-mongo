'use strict';

const express = require('express');
const router = express.Router();
const IndexController = require('../controllers');
const UC = require('../controllers/users');

router.get('/', IndexController.index);
router.get('/dbs', IndexController.getAllDatabases);

/**
 * Users CRUD
 */
 router.post('/users/', UC.insert);
 router.get('/users/', UC.get);
 router.put('/users/:id', UC.update);
 router.delete('/users/:id', UC.remove);

module.exports = router;