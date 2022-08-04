import React, { Component } from 'react'
import './App.css'
import Display from '../Display/Display'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Route exact path='/' render={()=> 
      <p>Howdy</p>
      }
      />
    )
  }
}

export default App;
