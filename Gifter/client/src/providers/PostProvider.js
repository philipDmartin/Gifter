import React, { useState } from 'react'

export const PostContext = React.createContext()

export const PostProvider = props => {
  const [posts, setPosts] = useState([])

  const getAllPosts = () => {
    return fetch('/api/post')
      .then(res => res.json())
      .then(setPosts)
  }

  const getPost = id => {
    return fetch(`/api/post/${id}`).then(res => res.json())
  }

  const addPost = post => {
    return fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(getAllPosts)
  }

  const searchPosts = searchTerm => {
    return fetch(`/api/post/search?q=${searchTerm}&sortDesc=true`)
      .then(res => res.json())
      .then(setPosts)
  }

  return (
    <PostContext.Provider
      value={{ posts, getAllPosts, addPost, getPost, searchPosts }}
    >
      {props.children}
    </PostContext.Provider>
  )
}
