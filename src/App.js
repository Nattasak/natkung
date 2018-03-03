import React, { Component } from 'react'
import Layout from './components/Layout'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </Layout>
    )
  }
}

export default App
