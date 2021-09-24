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
    },
    age: {
        type: Number,
    }
})

const accountSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(7).trim().required(),
    age: Joi.number().min(18)
})

module.exports = {
    Account: account,
    AccountSchema: accountSchema
}