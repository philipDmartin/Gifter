import React, { useContext } from 'react'
import { Form, Input } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'

const PostSearch = () => {
  const { searchPosts } = useContext(PostContext)
  const Search = e => {
    searchPosts(e.target.value)
  }

  return (
    <Form>
      <Input placeholder='Search...' onChange={Search} />
    </Form>
  )
}

export default PostSearch
