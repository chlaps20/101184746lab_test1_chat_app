const express = require('express');
const { registerUser, loginUser,allUsers } = require('../controllers/userControllers');
const router  = express.Router()
const {protect} = require('../middlewares/authMiddle')



router.route('/').post(registerUser).get(protect,allUsers)
router.post('/login',loginUser)

module.exports = router;