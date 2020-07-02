import React, { useContext, useEffect } from 'react'
import { PostContext } from '../providers/PostProvider'
import Post from './Post'

const PostList = () => {
  const { thePosts, getAllPosts } = useContext(PostContext)

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='cards-column'>
          {thePosts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
