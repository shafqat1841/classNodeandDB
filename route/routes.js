const express = require('express');

const {getUsers} = require('../controller/controller')

const router = express.Router();

router.get('/getUsers',getUsers)

module.exports = router;