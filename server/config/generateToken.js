const jwt = require('jsonwebtoken')
require("dotenv").config()


const generateToken= (id) => {
    return jwt.sign({id}, 'password1234',{
        expiresIn:'30d',
    });
};

module.exports = generateToken;