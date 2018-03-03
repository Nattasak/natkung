import React from 'react'
import styled from 'styled-components'
import { Container } from '../shared/styles'

const Footer = styled.footer.attrs({
  className: 'footer',
})``

export default () => {
  return (
    <Footer>
      <Container>
        <div className="content has-text-centered">
          <p>Footer</p>
        </div>
      </Container>
    </Footer>
  )
}
