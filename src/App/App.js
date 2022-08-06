import React, { Component } from 'react'
import './App.css'
import Display from '../Display/Display'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Bio from '../Bio/Bio'
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
       <div className='top'>
      <Header />
      <Route exact path='/' render={() =>
      <>
      <Link to={'/Bio'} style={{textDecoration: 'none'}}>
      <p>+</p>
      </Link>
      <div className='form-wrapper'>
      <Form getType={this.getType} />
      <Link to={`/${this.state.type}`}>
      <button>GO!</button>
      </Link>
      </div>
      </>
      
      
      }
      />
       </div>
       {/* >>>>>>this is the last thing you tried to do<<<<<<< */}
      {/* <Route 
      path={`/${this.state.type}`} render={() => <Display type={this.state.type}/>}
      /> */}
      <Route 
      path='/collage' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/drawing' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/mixed media' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/painting' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/sculpture' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/all' render={() => <Display type={this.state.type}/>}
      />
      <Route 
      path='/bio' render={() => <Bio />}
      />
      </main>
    )
  }
}

export default App;
