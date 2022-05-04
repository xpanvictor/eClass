
// First import the models
const Users = require('../../models/Users')

// The call controller test
exports.call = async function(username){
    return await Users.findOne({username})
}

