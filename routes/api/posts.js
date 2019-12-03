const router = require("express").Router();
const contentController = require("../../controllers/content.controller");

router.route("/").get(contentController.getPosts).post(contentController.createPost);

router.route("/:id").put(contentController.updatePost);

module.exports = router;