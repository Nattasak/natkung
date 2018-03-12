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
    margin-bottom: 30px;
    position: relative;

    &:before {
      content: counter(item); /* Counters */
      border-radius: 50%;
      width: 1.7rem;
      height: 1.7rem;
      margin-right: 21px;
      font-size: 17px;
      color: white;
      background: #24292e;
      text-align: center;
      display: inline-block;
      position: absolute;
      top: 12px;
    }

    a {
      text-decoration: none;
      font-size: 0.7em;
      font-weight: 600;
      width: 210px;
      margin-left: 47px;
      display: inline-block;

      &:hover {
        color: ${darken(0.2, '#1890ff')};
      }
    }

    p {
      font-size: 0.6em;
      margin-left: 49px;
    }
  }

  @media (min-width: 768px) {
    ol {
      padding-left: 40px;
    }

    li {
      margin-bottom: 40px;

      p {
        font-size: 0.7em;
      }
    }
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
