const {createBlogApi, deleteBlogApi, updateBlogApi, readBlogApi} = require('../apis/blogApis')


const createBlog =
    async (req, res, next) => {
  try {
    const {resp, code} = await createBlogApi(req.body.blog)
    console.log(code)
    res.status(code)
    res.json(resp)
  } catch (error) {
    console.log(error)
    res.status(401)
    res.json({created: false, error: 'Unable to create blog.'})
  }
}

const deleteBlog =
    async (req, res, next) => {
  try {
    const {resp, code} = await deleteBlogApi(req.body._id)
    res.status(code)
    res.json(resp)
  } catch (error) {
    res.status(400)
    res.json({deleted: false, error: 'Unable to delete blog.'})
  }
}

const updateBlog =
    async (req, res, next) => {
  try {
    const {resp, code} = await updateBlogApi(req.body._id, req.body.updates)
    res.status(code)
    res.json(resp)
  } catch (error) {
    res.status(401)
    res.json({updated: false, error: 'Unable to update blog.'})
  }
}

const readBlog =
    async (req, res, next) => {
  try {
    const {resp, code} = await readBlogApi(req.body)
    res.status(code)
    res.json(resp)
  } catch (error) {
    res.status(401)
    res.json({fetched: false, error: 'Unable to read blogs.'})
  }
}



                              module.exports = {
  createBlog,
  deleteBlog,
  updateBlog,
  readBlog
}