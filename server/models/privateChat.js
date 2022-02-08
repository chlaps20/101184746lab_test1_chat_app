const mongoose = require("mongoose");

const privateModel = mongoose.Schema({
    creator : {type:mongoose.Schema.Types.ObjectId,ref:"User"},
    to:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    content:{type:String,trim:true},
    chat:{ type:mongoose.Schema.Types.ObjectId,ref:"Chat"},
    
},{
    timestaps:true,
}
)

const Private = mongoose.model("Private",privateModel)

module.exports = Private;