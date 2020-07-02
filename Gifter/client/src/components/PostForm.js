import React, { useContext, useRef } from 'react'
import { PostContext } from '../providers/PostProvider'

export default props => {
  const { addPost } = useContext(PostContext)

  const title = useRef('title')
  const imageUrl = useRef('imageUrl')
  const caption = useRef('caption')
  const userProfileId = useRef('userProfileId')
  const dateCreated = useRef('dateCreated')

  const constructNewPost = () => {
    const newPostObject = {
      title: title.current.value,
      imageUrl: imageUrl.current.value,
      caption: caption.current.value,
      userProfileId: parseInt(userProfileId.current.value),
      dateCreated: new Date()
    }
    console.log(newPostObject)
    addPost(newPostObject).then(props.toggler)
  }

  return (
    <form className='postForm'>
      <h2 className='postForm__title'>New Post</h2>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postTitle'>Post title: </label>
          <input
            type='text'
            id='postTitle'
            ref={title}
            required
            autoFocus
            className='form-control'
            placeholder='Post title'
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postImageUrl'>Post imageUrl: </label>
          <input
            type='text'
            id='postImageUrl'
            ref={imageUrl}
            required
            autoFocus
            className='form-control'
            placeholder='Post imageUrl'
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postCaption'>Post caption: </label>
          <input
            type='text'
            id='postCaption'
            ref={caption}
            required
            autoFocus
            className='form-control'
            placeholder='Post caption'
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postUserProfileId'>Post userProfileId: </label>
          <input
            type='text'
            id='postUserProfileId'
            ref={userProfileId}
            required
            autoFocus
            className='form-control'
            placeholder='Post userProfileId'
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postDateCreated'>Post dateCreated: </label>
          <input
            type='text'
            id='postDateCreated'
            ref={dateCreated}
            required
            autoFocus
            className='form-control'
            placeholder='Post dateCreated'
          />
        </div>
      </fieldset>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewPost()
        }}
        className='btn btn-primary'
      >
        Save Post
      </button>
    </form>
  )
}
