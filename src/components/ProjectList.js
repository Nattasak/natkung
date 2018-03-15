import React, { Component } from 'react'
import styled from 'styled-components'

import { projectListJSON } from '../api/data'
import { Section, Container } from '../shared/styles'

const ProjectsWrapper = styled.div`
  ol {
    list-style: none;
    padding: 0;
  }

  li {
    counter-increment: item; /* Counters */
    position: relative;
    margin-bottom: 22px;

    &:before {
      content: counter(item); /* Counters */
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 14px;
      padding-top: 1px;
      color: white;
      background: #24292e;
      text-align: center;
      display: inline-block;
      position: absolute;
      top: 2px;
    }

    a {
      position: relative;
      display: inline-block;
      width: 210px;
      margin-left: 35px;

      & > span:hover + div {
        opacity: 1;
      }
    }

    p {
      font-size: 14px;
      margin: 0 0 0 37px;
    }
  }
`

const StackWrapper = styled.div`
  position: absolute;
  opacity: 0;
  top: -9px;
  left: 70%;
  font-size: 24px;
  transition: all 0.2s ease-out;

  & > i {
    margin: 0 5px;
  }
`

export default class ProjectList extends Component {
  render() {
    return (
      <Section>
        <Container>
          <ProjectsWrapper>
            <ol>
              {projectListJSON.map(project => (
                <li key={project.id}>
                  <a href={project.href}>
                    <span>{project.title}</span>
                    <StackWrapper>
                      <i class="devicon-react-original colored" />
                      <i class="devicon-html5-plain-wordmark colored" />
                      <i class="devicon-css3-plain-wordmark colored" />
                    </StackWrapper>
                  </a>
                  <p>{project.desc}</p>
                </li>
              ))}
            </ol>
          </ProjectsWrapper>
        </Container>
      </Section>
    )
  }
}
