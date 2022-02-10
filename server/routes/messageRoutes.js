const express = require('express')
const {protect} = require('../middlewares/authMiddle')
const {sendMessage} = require('../controllers/messageControllers')

const router = express.Router()

router.route('/').post(protect,sendMessage)


module.exports = router;