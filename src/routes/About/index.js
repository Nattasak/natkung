import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container, H2, Br } from '../../shared/styles'

const ExperienceWrapper = styled.div`
  margin-top: 20px;
`

const ImgWrapper = styled.div`
  margin-bottom: 5vw;

  figure {
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: -75%;
      z-index: 2;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
    }
    &:hover::before {
      animation: shine 1.3s;
    }
    @keyframes shine {
      100% {
        left: 125%;
      }
    }
  }

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

    figure {
      &:hover::before {
        animation: shine 2.3s;
      }
    }

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
            <figure>
              <img src="img/nat.jpg" />
            </figure>
          </ImgWrapper>
          <H2>Work Experience</H2>
          <ExperienceWrapper>
            <ul>
              <li>
                Front-end Developer<br />@ Ultimate Digital Service (1 year)
              </li>
            </ul>
          </ExperienceWrapper>
        </Container>
      </Section>
    </div>
  )
}
