const express = require("express")
const { createBlog, deleteBlog, updateBlog, readBlog } = require("../controllers/blogController")
const router = express.Router()

router.get("/", (req,res,next) => {
    res.send("nothing")
})
router.post("/createBlog", createBlog)
router.post("/deleteBlog", deleteBlog)
router.post("/updateBlog", updateBlog)
router.post("/readBlog", readBlog)

module.exports = router