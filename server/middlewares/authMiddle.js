const jwt = require("jsonwebtoken");
const User = require("../models/UserModel.js");
const asyncHandler = require("express-async-handler");
require("dotenv")

const protect = asyncHandler(async (req, res, next) => {
  let token;
 
  let secret = 'password1234'
 

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, secret);
      req.user = await User.findById(decoded.id).select("-password");
      
      next();

    } catch (error) {
      
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
    
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };