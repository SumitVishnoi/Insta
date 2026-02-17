const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer")

const postRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
const identifyUser = require("../middlewares/auth.middleware")

postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

postRouter.get("/", identifyUser, postController.getPostController)

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)
module.exports = postRouter