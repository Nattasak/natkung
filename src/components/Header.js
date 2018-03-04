import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'
import Nav from './Nav'

const Header = styled.header`
  background: #24292e;
  color: rgba(255, 255, 255, 0.75);
  padding-top: 12px;
  padding-bottom: 12px;
`

export default () => {
  return (
    <Header>
      <Container>
        <Nav />
      </Container>
    </Header>
  )
}
