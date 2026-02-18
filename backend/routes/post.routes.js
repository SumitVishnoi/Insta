const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer")

const postRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
const identifyUser = require("../middlewares/auth.middleware")

/**
 * @route POST /api/posts/
 * @description create a post
 * @access Private
 */
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

/**
 * @route GET /api/posts/
 * @description get all posts of a user
 * @access Private
 */
postRouter.get("/", identifyUser, postController.getPostController)

/**
 * @route GET /api/post/details/:postId
 * @description get post details
 * @access Private
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

/**
 * @route POST /api/like/:postId
 * @description like a post 
 * @access Private
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

module.exports = postRouter