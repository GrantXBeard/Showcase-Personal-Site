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
      <main>
      <Header />
      <Route exact path='/' render={() => 
      <form>
      <select value={this.state.type} onChange={event => this.state.getChoice(event)} name='type' id='type'>
       <option defaultValue=''>Select a Medium</option>
       <option value='collage'>Collage</option>
       <option value='drawing'>Drawing</option>
       <option value='mixed media'>Mixed Media</option>
       <option value='painting'>Painting</option>
       <option value='sculpture'>Sculpture</option>
       <option value='all'>All</option>
      </select>
   </form>
      }
      />
      <Route 
      path='/work/collage' render={() => <Display />}
      />
      <Route 
      path='/work/drawing' render={() => <Display />}
      />
      <Route 
      path='/work/mixed-media' render={() => <Display />}
      />
      <Route 
      path='/work/painting' render={() => <Display />}
      />
      <Route 
      path='/work/sculpture' render={() => <Display />}
      />
      <Route 
      path='/work/all' render={() => <Display />}
      />
      </main>
    )
  }
}

export default App;
