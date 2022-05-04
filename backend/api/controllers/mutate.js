
// First import the models
const Users = require('../../models/Users')

// Create users controller function
exports.createUser = async function(user){
    const new_user = await new Users(
        Object.assign({}, user, {name: {first: 'Ola', last: 'Sap'}})
    )
    return await new_user.save()
}

// The delete user function
exports.deleteUser = async function(username){
    return await Users.findOneAndDelete({username})
}