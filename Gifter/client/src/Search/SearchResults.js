import React, { useState, useContext, useEffect } from 'react'
import { PostContext } from '../providers/PostProvider'
import { Post } from '../components/Post'
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap'
// import { EditAnimalForm } from "../animal/EditAnimalForm"

export const SearchResults = ({ searchTerms }) => {
  const { posts } = useContext(PostContext)

  const [filteredPosts, setFiltered] = useState([])
  const [selectedPost, setPost] = useState({
    post: {}
  })

  // Toggle details modal
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  // Toggle edit modal
  //   const [editModal, setEditModal] = useState(false)
  //   const toggleEdit = () => setEditModal(!editModal)

  useEffect(() => {
    if (searchTerms !== '') {
      const subset = posts.filter(post =>
        post.name.toLowerCase().includes(searchTerms)
      )
      setFiltered(subset)
    } else {
      setFiltered([])
    }
  }, [searchTerms, posts])

  return (
    <div className='searchResults'>
      <h3>Results</h3>
      <div className='posts'>
        {filteredPosts.map(post => (
          <div
            className='fakeLink href'
            onClick={() => {
              setPost({ post })
              toggle()
            }}
          >
            {post.title}
          </div>
        ))}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedPost.post.name}</ModalHeader>
        <ModalBody>
          <Post key={selectedPost.post.id} />
        </ModalBody>
      </Modal>
    </div>
  )
}
