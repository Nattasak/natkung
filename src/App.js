import { BackTop } from 'antd'
import React, { Component } from 'react'

import Layout from './components/Layout'

// import './App.css'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <Layout>
        {children}
        <BackTop />
      </Layout>
    )
  }
}
