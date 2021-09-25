const Joi = require('joi');

const accountSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(7).trim().required()
})

module.exports = accountSchema