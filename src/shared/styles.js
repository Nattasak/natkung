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
