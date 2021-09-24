const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7q9nq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        )
        console.log('Connected to database...')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    connect
}