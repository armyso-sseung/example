const express = require("express")
const userController = require("../controllers/user.controller")
const userRouter = express.Router()



userRouter.get('/', userController.getUserList)



module.exports = userRouter