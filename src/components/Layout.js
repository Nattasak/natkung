import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from './Header'

injectGlobal`
  :root {
    --main-font-family: 'Open Sans', sans-serif;
    --main-font-size: 17px;
    --main-link-color: #0366d6;
    --main-link-hover-color: #024ea4;
  }
  body {
    counter-reset: item; /* Counters */
  }
`

const PageContainer = styled.div`
  font-family: var(--main-font-family);
  font-size: var(--main-font-size);
`

const ChildrenWrapper = styled.main`
  padding: 2rem 1.5rem;

  a {
    color: var(--main-link-color);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--main-link-hover-color);
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
