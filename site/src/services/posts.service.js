import axios from 'axios'

const API_URL = `http://localhost:${process.env.VUE_APP_API_PORT}/`

class PostsService {
  getPosts (query) {
    return axios.get(API_URL + 'posts', { params: query, withCredentials: true }).then(
      res => res.data.items
    )
  }

  getPost (postId) {
    return axios.get(API_URL + `posts/${postId}`, { withCredentials: true }).then(
      res => res.data
    )
  }

  addPost (post) {
    return axios.post(API_URL + 'posts', post, { withCredentials: true }).then(
      res => res.data
    )
  }

  modifyPost (id, newPost) {
    return axios.patch(API_URL + 'posts', { id, newPost }, { withCredentials: true }).then(
      res => res.data
    )
  }

  deletePost (id) {
    return axios.delete(API_URL + 'posts', { params: { id }, withCredentials: true })
  }
}

export default new PostsService()
