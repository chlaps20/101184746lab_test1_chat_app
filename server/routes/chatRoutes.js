const express = require('express')
const router = express.Router();
const {accessChat,fetchChats,createGroupChat} = require('../controllers/chatControllers')
const {protect} = require('../middlewares/authMiddle')


router.route('/').post( protect,accessChat);
router.route('/').get(protect,fetchChats);
router.route('/group').post(protect,createGroupChat);


module.exports = router;