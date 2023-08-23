const Blog = require('../models/blog')

const createBlogApi =
    async (newBlog) => {
  try {
    const createdBlog = await Blog.create(newBlog)
    return {
      'resp': {created: true, createdBlog: createdBlog}, 'code': 201
    }
  } catch (error) {
    return {
      'resp': {created: false, error: 'Unable to create blog.'}, 'code': 401
    }
  }
}

const deleteBlogApi =
    async (id) => {
  try {
    const blogToDel = await Blog.findById(id)
    if (blogToDel) {
      await Blog.findByIdAndDelete(id)

      return {
        'resp': {deleted: true}, 'code': 202
      }
    }
    else {
      return {
        'resp': {deleted: false, error: 'Blog does not exist.'}, 'code': 404
      }
    }

  } catch (error) {
    return {
      'resp': {deleted: false, error: 'Unable to delete blog.'}, 'code': 401
    }
  }
}

const updateBlogApi =
    async (id, updates) => {
  try {
    const blogToDel = await Blog.findById(id)
    if (blogToDel) {
      const updatedBlog = await Blog.findByIdAndUpdate(id, updates)
      return {
        'resp': {updated: true, updatedBlog}, 'code': 202
      }
    }
    else {
      return {
        'resp': {updated: false, error: 'Blog does not exist.'}, 'code': 404
      }
    }
  } catch (error) {
    return {
      'resp': {updated: false, error: 'Unable to update blog.'}, 'code': 401
    }
  }
}

const readBlogApi =
    async (filters) => {
  try {
    const blogs = await Blog.find(filters)
    if (blogs.length == 0) {
      return {
        'resp': {fetched: false, error: 'zero matches'}, 'code': 404
      }
    }
    else {
      return {
        'resp': {fetched: true, blogs}, 'code': 202
      }
    }
  } catch (error) {
    return {
      'resp': {fetched: false, error: 'Unable to read blogs.'}, 'code': 401
    }
  }
}

                       module.exports = {
  createBlogApi,
  deleteBlogApi,
  updateBlogApi,
  readBlogApi
}