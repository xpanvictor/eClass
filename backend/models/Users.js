
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: [true, "Please provide the first_name"]
        },
        last: {
            type: String,
            required: [true, "Please provide the last_name"]
        }
    },
    username: {type: String, unique: true, index: 1},
    dob: {type: Date, required: true},
    email: {
        type: String,
        required: true,
        validate: [email_checker, "Provide valid email"]
    },
    password: {
        type: String,
        min: 6,
        required: [true, "Please provide the password"],
        select: false
    },
    createdAt: {type: Date, default: Date.now}
})

userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Virtual for full name getter
const f_name = userSchema.virtual('fullname')
f_name.get(function(value, virtual, doc){
    return doc.name.first + ' ' + doc.name.last
})

// Email checker function
function email_checker(val){
    const e_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return e_regex.test(val)
}

module.exports = mongoose.model('User', userSchema)
