const express = require('express');
const router = express.Router();

const accountService = require('./accountService')

router.get('/', accountService.test)

module.exports = router