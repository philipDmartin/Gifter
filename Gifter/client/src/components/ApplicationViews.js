import React from 'react'
import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PostList from './PostList'
import PostForm from './PostForm'
import PostDetails from './PostDetails'

import { UserProfileContext } from '../providers/UserProfileProvider'
import Login from './Login'
import Register from './Register'

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext)

  return (
    <Switch>
      <Route path='/' exact>
        {isLoggedIn ? <PostList /> : <Redirect to='/login' />}
      </Route>

      <Route path='/add'>
        {isLoggedIn ? <PostForm /> : <Redirect to='/login' />}
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/' exact>
        <PostList />
      </Route>

      <Route path='/posts/add'>
        <PostForm />
      </Route>

      <Route path='/posts/:id'>
        <PostDetails />
      </Route>
    </Switch>
  )
}

export default ApplicationViews
