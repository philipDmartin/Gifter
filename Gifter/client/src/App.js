import React, { useState } from 'react'
import './App.css'
import { PostProvider } from './providers/PostProvider'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import { SearchBar } from './Search/SearchBar'
import { SearchResults } from './Search/SearchResults'

function App () {
  const [searchTerms, setTerms] = useState()
  return (
    <div className='App'>
      <PostProvider>
        <div className='search'>
          <SearchBar setTerms={setTerms} />
          <SearchResults searchTerms={searchTerms} />
        </div>
        <div className='post'>
          {<PostForm />}
          <PostList />
        </div>
      </PostProvider>
    </div>
  )
}

export default App
