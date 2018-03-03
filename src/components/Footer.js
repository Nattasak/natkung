import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'

const Footer = styled.footer.attrs({
  className: 'footer',
})`
  background: #41e2e2;
  color: white;
`

export default () => {
  return (
    <Footer>
      <Container>Footer</Container>
    </Footer>
  )
}
