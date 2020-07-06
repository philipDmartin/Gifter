import React, { useContext, useEffect } from 'react'
import { PostContext } from '../providers/PostProvider'
import { Post } from './Post'
import PostSearch from './PostSearch'

const PostList = () => {
  const { posts, getAllPosts, searchPosts } = useContext(PostContext)

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='cards-column'>
          <PostSearch />
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
