import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { em } from 'polished'

import Header from './Header'
import Footer from './Footer'

injectGlobal`
  body {
    font-size: ${em('25px')};
    color: #000000;
  }
`

const PageContainer = styled.div``

const ChildrenContainer = styled.div``

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <PageContainer>
        <Header />
        <ChildrenContainer>{children}</ChildrenContainer>
        <Footer />
      </PageContainer>
    )
  }
}
