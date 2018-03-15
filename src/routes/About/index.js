import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container, H2, Br } from '../../shared/styles'

const ExperienceWrapper = styled.div`
  margin-top: 20px;
`

export default () => {
  return (
    <div>
      <PageTitle>About Nat</PageTitle>
      <Br />
      <Section>
        <Container>
          <H2>Work Experience</H2>
          <ExperienceWrapper>
            <ul>
              <li>Front End Developer @ Ultimate Digital Service 1 year</li>
            </ul>
          </ExperienceWrapper>
        </Container>
      </Section>
    </div>
  )
}
