import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'
import Nav from './Nav'

const Header = styled.header.attrs({
  className: 'section',
})`
  background: #41e2e2;
  color: white;
`

export default () => {
  return (
    <Header>
      <Container>
        Header
        {/* <Nav /> */}
      </Container>
    </Header>
  )
}
