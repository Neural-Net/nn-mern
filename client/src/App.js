import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import ResourceListContainer from './containers/ResourceListContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div>
          <ResourceListContainer />
        </div>
      </div>
    )
  }
}

export default App
