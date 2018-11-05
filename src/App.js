import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
//referred from https://www.youtube.com/watch?v=acJHkd6K5kI Ryan Waite WalkThrough
import mainPage from './components/pages/mainPage'
import searchPage from './components/pages/searchPage'
class BooksApp extends React.Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={ mainPage }/>
        <Route exact path="/search" component={ searchPage }/>
      </div>
    );
  }
}

export default BooksApp
