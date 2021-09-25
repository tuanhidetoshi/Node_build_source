const mongoose = require('mongoose');
const Joi = require('joi');

const account = mongoose.model('Account', {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = {
    Account: account
}