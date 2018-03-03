import { BackTop } from 'antd'
import React, { Component } from 'react'

import Layout from './components/Layout'
import ProjectList from './components/ProjectList'

import './App.css'
import logo from './logo.svg'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <BackTop />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <ProjectList />
      </Layout>
    )
  }
}
