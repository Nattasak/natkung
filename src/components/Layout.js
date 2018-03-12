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
  font-size: 2em;
`

const ChildrenWrapper = styled.main`
  padding: 2rem 1.5rem;
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
