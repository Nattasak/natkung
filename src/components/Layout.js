import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from './Header'

injectGlobal`
  body {
    counter-reset: item; /* Counters */
  }
`

const PageContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
`

const ChildrenWrapper = styled.main`
  padding: 2rem 1.5rem;

  a {
    color: #0366d6;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #024ea4;
    }
  }
`

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <PageContainer>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </PageContainer>
    )
  }
}
