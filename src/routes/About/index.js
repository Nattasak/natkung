import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container, H2, Br } from '../../shared/styles'

const ExperienceWrapper = styled.div`
  margin-top: 20px;
`

const ImgWrapper = styled.div`
  margin-bottom: 5vw;

  img {
    width: 50vw;
    border-radius: 8px;
  }

  /* [ Tablets ] */
  @media (min-width: 768px) {
    margin-bottom: 4vw;

    img {
      width: 40vw;
    }
  }

  /* [ Desktops ] */
  @media (min-width: 1025px) {
    margin-bottom: 2vw;

    img {
      width: 20vw;
    }
  }
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
          <ImgWrapper>
            <img src="img/nat.jpg" />
          </ImgWrapper>
          <H2>Work Experience</H2>
          <ExperienceWrapper>
            <ul>
              <li>Front-end Developer<br/>@ Ultimate Digital Service (1 year)</li>
            </ul>
          </ExperienceWrapper>
        </Container>
      </Section>
    </div>
  )
}
