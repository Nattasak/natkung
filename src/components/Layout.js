import { em } from 'polished'
import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import { Section, Container } from '../shared/styles'
import Footer from './Footer'
import Header from './Header'

injectGlobal`
  body {
    font-size: ${em('25px')};
    color: #000000;
  }
`

const PageContainer = styled.div``

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <PageContainer>
        <Header />
        <Section>
          <Container>{children}</Container>
        </Section>
        <Footer />
      </PageContainer>
    )
  }
}
