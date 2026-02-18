const express = require("express")
const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description register a user
 */
authRouter.post("/register", authController.registerController)

/**
 * @route POST /api/auth/login
 * @description login a user
 */
authRouter.post("/login", authController.loginController)


module.exports = authRouter