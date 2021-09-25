const express = require('express');
const router = express.Router();

const accountService = require('./accountService');

const validation = require('../../middlewares/validation/validation');
const account = require('../../middlewares/validation/account');

router.post('/', [validation(account)], accountService.createAccount);

module.exports = router;