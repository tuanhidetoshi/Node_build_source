const express = require('express');
const router = express.Router();

const userRoute = require('./account');

router.use('/account', userRoute);

module.exports = router