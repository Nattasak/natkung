import { BackTop } from 'antd'
import React, { Component } from 'react'

import Layout from './components/Layout'

import './App.css'
import logo from './logo.svg'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <Layout>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        {children}
        <BackTop />
      </Layout>
    )
  }
}
