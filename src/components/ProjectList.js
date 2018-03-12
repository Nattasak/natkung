import { darken } from 'polished'
import React, { Component } from 'react'
import styled from 'styled-components'

import { projectListJSON } from '../api/data'
import { Section, Container, Title } from '../shared/styles'

const ProjectsWrapper = styled.div`
  ol {
    list-style: none;
    padding: 0;
  }

  li {
    counter-increment: item; /* Counters */
    margin-bottom: 20px;
    position: relative;

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
      text-decoration: none;
      color: #0366d6;
      font-size: 14px;
      font-weight: 600;
      width: 210px;
      margin-left: 35px;
      display: inline-block;

      &:hover {
        color: ${darken(0.1, '#0366d6')};
      }
    }

    p {
      font-size: 14px;
      margin-left: 37px;
      margin-bottom: 22px;
    }
  }

  @media (min-width: 768px) {
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
                  <a href={project.href}>{project.title}</a>
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
