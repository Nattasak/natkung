import { withRouter } from 'react-router-dom'
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

class Intro extends Component {
  goHome = () => {
    this.props.history.push('/project')
  }

  render() {
    return (
      <Section>
        <Container>
          <IntroWrapper>
            <Typist>
              <Typist.Delay ms={700} />
              <h2>Hi 😁</h2>
              <Typist.Delay ms={600} />
              {'  '}My name is Nat.
              <Typist.Delay ms={800} />
              <Br />
              <span>I'm a Front End Developer 😋</span>
              {setTimeout(() => this.goHome(), 7400)}
            </Typist>
          </IntroWrapper>
        </Container>
      </Section>
    )
  }
}

export default withRouter(Intro)
