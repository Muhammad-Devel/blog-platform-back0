const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  createPost,
  allPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.get("/", (req, res) => {
  res.json({ message: "Post route is working!" });
});

router.post("/create", auth, createPost);
router.get("/post", auth, allPosts);
router.get("/post/:id", auth, getPost);
router.put("/post/:id", auth, updatePost);
router.delete("/post/:id", auth, deletePost);

module.exports = router;
