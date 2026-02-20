const express = require("express")
const authController = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")


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

/**
 * @route GET /api/auth/get-me
 * @description get current user info
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController)

module.exports = authRouter