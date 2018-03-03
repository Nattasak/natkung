import { em } from 'polished'
import React, { Component } from 'react'
import styled from 'styled-components'

import { projectListJSON } from '../api/data'
import { Section, Container, Title } from '../shared/styles'

const Project = styled.li`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`

export default class ProjectList extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Project List</Title>
          <ul>
            {projectListJSON.map(project => (
              <Project key={project.id}>
                <strong>{project.title}</strong>
                <p>{project.desc}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  See project
                </a>
              </Project>
            ))}
          </ul>
        </Container>
      </Section>
    )
  }
}
