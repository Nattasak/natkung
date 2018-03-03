import styled from 'styled-components'
import { em, darken } from 'polished'

export const Section = styled.section.attrs({
  className: 'section',
})``

export const Container = styled.div.attrs({
  className: 'container',
})`
  font-size: ${em('18px')};
`

export const Title = styled.h1.attrs({
  className: 'title',
})`
  color: blue;
  font-size: ${em('20px')};
  letter-spacing: 2px;
`
