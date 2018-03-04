import React from 'react'
import styled from 'styled-components'

import { Container } from '../shared/styles'

const Footer = styled.footer.attrs({
  className: 'footer',
})`
  background: #24292e;
  color: rgba(255, 255, 255, 0.75);
  padding-top: 12px;
  padding-bottom: 12px;
`

export default () => {
  return (
    <Footer>
      <Container>...</Container>
    </Footer>
  )
}
