
const mongoose = require('mongoose')
const NODE_ENV = process.env.NODE_ENV

const MONGO_URI = (NODE_ENV=='production') ? process.env.MONGO_URI : 'mongodb://127.0.0.1:27017/eclass'
async function connect(){
    await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true
    })
    console.log('DB connected')
}

module.exports = connect
