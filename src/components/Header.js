import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'

const Header = styled.header`
  height: 60px;
`

export default () => {
  return (
    <Header>
      <Container>
        Header
      </Container>
    </Header>
  )
}
