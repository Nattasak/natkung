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
    margin-bottom: 45px;

    &:before {
      content: counter(item); /* Counters */
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin-right: 21px;
      font-size: 20px;
      color: #fff;
      background: #24292e;
      text-align: center;
      display: inline-block;
      position: relative;
      top: -9px;
    }

    a {
      text-decoration: none;
      font-size: 0.8em;
      font-weight: 600;
      width: 250px; /* Truncate text */
      overflow: hidden; /* Truncate text */
      white-space: nowrap; /* Truncate text */
      text-overflow: ellipsis; /* Truncate text */
      display: inline-block; /* Truncate text */

      &:hover {
        color: ${darken(0.2, '#1890ff')};
      }
    }

    p {
      font-size: 0.6em;
      margin-left: 56px;
    }
  }

  @media (min-width: 768px) {
    ol {
      padding-left: 40px;
    }

    li {
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
