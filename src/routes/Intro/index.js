import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import Typist from 'react-typist'

import { Section, Container } from '../../shared/styles'

class Intro extends Component {
  goHome = () => {
    this.props.history.push('/project')
  }

  render() {
    return (
      <Section>
        <Container>
          <Typist>
            <strong>Hello!</strong>
            <Typist.Delay ms={300} />
            {'  '}My name is Nat.
            <Typist.Delay ms={300} />
            <br />
            <br />
            I'm a Front End React Js Developer.
            {setTimeout(() => this.goHome(), 7000)}
          </Typist>
        </Container>
      </Section>
    )
  }
}

export default withRouter(Intro)
