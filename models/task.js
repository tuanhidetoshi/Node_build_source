const mongoose = require('mongoose');
const Joi = require('joi');

const task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const taskSchema = Joi.object({
    description: Joi.string().required(),
    completed: Joi.boolean().required(),
    created: Joi.date(),
})

module.exports = {
    Task: task,
    TaskSchema: taskSchema
}