import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container, H2, Br } from '../../shared/styles'

const ExperienceWrapper = styled.div`
  margin-top: 20px;
`

export default () => {
  return (
    <div>
      <PageTitle>
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
        <span> </span>
        <span>N</span>
        <span>a</span>
        <span>t</span>
      </PageTitle>
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
