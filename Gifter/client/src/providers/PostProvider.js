import React, { useState, useEffect, createContext } from 'react'
import { Spinner } from 'reactstrap'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export const PostContext = React.createContext()

const getToken = () => firebase.auth().currentUser.getIdToken()

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
    return getToken().then(token => 
    fetch('/api/post', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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
