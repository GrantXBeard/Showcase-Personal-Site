import React, { Component } from 'react'
import './App.css'
import Display from '../Display/Display'
import Header from '../Header/Header'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      type: ''
    }
  }

  getType = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <main>
      <Header />
      <Route exact path='/' render={() => 
      <form>
      <select value={this.state.type} onChange={event => this.getType(event)} name='type' id='type'>
       <option defaultValue=''>Select a Medium</option>
       <option value='collage'>Collage</option>
       <option value='drawing'>Drawing</option>
       <option value='mixed-media'>Mixed Media</option>
       <option value='painting'>Painting</option>
       <option value='sculpture'>Sculpture</option>
       <option value='all'>All</option>
      </select>
      <Link to={`/${this.state.type}`}>
      <button>GO!</button>
      </Link>
      </form>
      }
      />
      <Route 
      path='/collage' render={() => <Display />}
      />
      <Route 
      path='/drawing' render={() => <Display />}
      />
      <Route 
      path='/mixed-media' render={() => <Display />}
      />
      <Route 
      path='/painting' render={() => <Display />}
      />
      <Route 
      path='/sculpture' render={() => <Display />}
      />
      <Route 
      path='/all' render={() => <Display />}
      />
      </main>
    )
  }
}

export default App;
