import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import ApplicationViews from './components/ApplicationViews'
import { PostProvider } from './providers/PostProvider'
import { SearchBar } from './Search/SearchBar'
import { SearchResults } from './Search/SearchResults'
import Header from './components/Header'

function App () {
  const [searchTerms, setTerms] = useState()
  return (
    <div className='App'>
      <Router>
        <PostProvider>
          <Header />
          <div className='search'>
            <SearchBar setTerms={setTerms} />
            <SearchResults searchTerms={searchTerms} />
          </div>
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  )
}

export default App
