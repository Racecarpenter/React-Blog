import axios from 'axios'

const getComments = () => {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios(`https://jsonplaceholder.typicode.com/comments`)
  }
}

const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    payload: axios.post(`https://jsonplaceholder.typicode.com/comments`, comment)
  }
}

const getAuthors = () => {
  return {
    type: 'FETCH_AUTHORS',
    paylod: axios(`https://jsonplaceholder.typicode.com/users`)
  }
}

const getPosts = () => {
  return {
    type: 'FETCH_POSTS',
    payload: axios(`https://jsonplaceholder.typicode.com/comments`)
  }
}

const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
  }
}

export {
  getComments,
  addComment,
  getAuthors,
  getPosts,
  addPost
}
