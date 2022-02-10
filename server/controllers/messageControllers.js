const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const Message = require('../models/messageModel');
const User = require("../models/UserModel");

const sendMessage = expressAsyncHandler(async(req,res)=> {
    const {content,chatId} = req.body;

    if(!content || !chatId){
        console.log("Fields are required")
        return res.sendStatus(400)
    }

    var newMessage = {
        sender:req.user._id,
        content:content,
        chat:chatId
    }

    try {
        var message = await Message.create(newMessage)
        message = await message.populate("sender").execPopulate()
        message = await message.populate("chat").execPopulate()
        message = await User.populate(message,{
            path:'chat.users',
            select:'username firstName'
        })

        await Chat.findByIdAndUpdate(req.body.chatId, {
            latestMessage:message,
        })

        res.json(message)
    } catch (error) {
        res.status(400);
    }
})

module.exports = {sendMessage}