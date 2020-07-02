import React, { useContext, useRef } from 'react'
import { PostContext } from '../providers/PostProvider'

export default props => {
  const { addPost } = useContext(PostContext)
  const title = useRef('')
  const imageUrl = useRef(0)
  const caption = useRef(0)
  const userProfileId = useRef(0)
  const dateCreated = useRef(0)

  const constructNewPost = () => {
    // const postId = parseInt(poatId.current.value)

    // if (postId === 0) {
    //   window.alert('Please select a post')
    // } else {
      addPost({
        title: title.current.value,
        imageUrl: imageUrl.current.value,
        caption: caption.current.value,
        userProfileId: userProfileId.current.value,
        dateCreated: title.dateCreated.value
      }).then(() => props.history.push('/posts'))
    }
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

// import React, { useContext, useState, useEffect } from 'react'
// import { PostContext } from '../providers/PostProvider'
// // import { UserContext } from '../users/UserProvider'

// //define state and context names
// export default props => {
//   const { addPost, thePosts, updatePost } = useContext(PostContext)
//   //   const { user } = useContext(UserContext)
//   const [thePost, setPosts] = useState({})

//   const editMode = props.match.params.hasOwnProperty('poatId')

//   //track change when user types in inputfield
//   const handleControlledInputChange = event => {
//     const newPost = Object.assign({}, thePost)
//     newPost[event.target.name] = event.target.value

//     setPosts(newPost)
//   }

//   //fing id for edit mode
//   const setDefaults = () => {
//     if (editMode) {
//       const postId = parseInt(props.match.params.postId)
//       const selectedPost = thePosts.find(p => p.id === postId) || {}
//       setPosts(selectedPost)
//     }
//   }
//   useEffect(() => {}, [thePost])

//   useEffect(() => {
//     setDefaults()
//   }, [thePosts])

//   //write a function to find specific objects for entering a new gig
//   const constructNewPost = () => {
//     const postId = parseInt(thePost.postId)
//     // const currentUser = parseInt(localStorage.getItem('currentUser'))
//     // const currentPostUserObject = user.find(u => u.id === currentUser)
//     // const currentPost = currentPostUserObject.postId
//     if (editMode) {
//       updatePost({
//         id: thePost.id,
//         title: thePost.title,
//         ImageUrl: thePost.imageUrl,
//         Caption: thePost.caption,
//         UserProfileId: thePost.userProfileId,
//         DateCreated: thePost.dateCreated
//       }).then(() => props.history.push('/posts'))
//     } else {
//       addPost({
//         id: thePost.id,
//         title: thePost.title,
//         ImageUrl: thePost.imageUrl,
//         Caption: thePost.caption,
//         UserProfileId: thePost.userProfileId,
//         DateCreated: thePost.dateCreated
//       }).then(() => props.history.push('/posts'))
//     }
//   }

//   return (
//     <form className='eventForm'>
//       <h2 className='admit'>{editMode ? 'Update Post' : 'Admit Post'}</h2>
//       <div className='form-group'>
//         <label htmlFor='title'>Post Title</label>
//         <input
//           type='text'
//           id='title'
//           name='title'
//           // ref={title}
//           defaultValue={thePost.title}
//           required
//           autoFocus
//           className='form-control'
//           placeholder='Please Enter Post Title'
//           onChange={handleControlledInputChange}
//         />
//       </div>
//       <div className='form-group'>
//         <label htmlFor='Key'>Post Caption</label>
//         <input
//           type='text'
//           id='caption'
//           // ref={key}
//           name='caption'
//           defaultValue={thePost.caption}
//           required
//           autoFocus
//           className='form-control'
//           placeholder='Please Enter Post Caption'
//           onChange={handleControlledInputChange}
//         />
//       </div>

//       <button
//         type='submit'
//         onClick={evt => {
//           evt.preventDefault()
//           constructNewPost()
//         }}
//         className='btn btn-primary'
//       >
//         {editMode ? 'Save Updates' : 'Make Post'}
//       </button>
//     </form>
//   )
// }
