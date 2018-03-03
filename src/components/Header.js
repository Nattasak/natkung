import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'

const Header = styled.header`
  background: #41e2e2;
  color: white;
`

export default () => {
  return (
    <Header>
      <Container>Header</Container>
    </Header>
  )
}
