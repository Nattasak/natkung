import React, { Component } from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import { Section, Container } from '../../shared/styles'

const IntroWrapper = styled.div`
  color: black;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;

  h2 {
    font-size: 6vw;
    border-bottom: 1px solid black;
    padding-bottom: 7px;
    width: 55px;
    white-space: nowrap;
  }

  span {
    font-size: 4vw;
  }
`

const Br = styled.br`
  content: ' ';
  display: block;
  margin-top: 2vw;
`

export default class Intro extends Component {
  render() {
    return (
      <Section>
        <Container>
          <IntroWrapper>
            <Typist>
              <Typist.Delay ms={700} />
              <h2>Hi 😁</h2>
              <Typist.Delay ms={600} />
              My name is Notto.
              <Typist.Backspace count={6} delay={200} />
              Nutsu.
              <Typist.Backspace count={6} delay={200} />
              Nat.
              <Typist.Delay ms={800} />
              <Br />
              <span>I'm a Front End Developer 😋</span>
            </Typist>
          </IntroWrapper>
        </Container>
      </Section>
    )
  }
}
