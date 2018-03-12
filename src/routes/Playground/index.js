import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container, Br } from '../../shared/styles'

const Topic = styled.h3`
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
`

const Flex___Evenly_Distributed_Children = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  li {
    list-style-type: none;
    margin: 0.5em 0;
    transition: opacity 0.2s;
  }

  &:hover li:not(:hover) {
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Flex___Centering = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  height: 80px;

  div {
    background: blue;
    width: 20px;
    height: 20px;
  }
`

export default () => {
  return (
    <div>
      <PageTitle>Playground</PageTitle>
      <Section>
        <Container>
          <Topic>Flex - Evenly distributed children</Topic>
          <Flex___Evenly_Distributed_Children>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
          </Flex___Evenly_Distributed_Children>
          <Br />

          <Topic>Flex - Centering</Topic>
          <Flex___Centering>
            <div></div>
          </Flex___Centering>
          <Br />

        </Container>
      </Section>
    </div>
  )
}
