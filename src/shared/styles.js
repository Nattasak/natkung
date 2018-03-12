import styled from 'styled-components'
import { em, darken } from 'polished'

export const Section = styled.section`
  padding: 3rem 0;
`

export const Container = styled.div``

export const Title = styled.h1`
  color: #03A9F4;
  font-size: ${em('19px')};
  letter-spacing: 2px;
`

export const SubTitle = styled.h2`
  color: black;
  font-size: ${em('13px')};
  letter-spacing: 1px;
  margin-bottom: 2em;
`

export const Hr = styled.hr`
  background-color: black;
  height: 1px;
`

export const Br = styled.br`
  content: " ";
  display: block;
  margin-top: 80px;
`
