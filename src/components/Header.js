import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'
import Nav from './Nav'

const Header = styled.header`
  color: rgba(255, 255, 255, 0.75);
  background: #24292e;
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
