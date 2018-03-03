import React, { Component } from 'react'
import styled from 'styled-components'

import { projectListJSON } from '../api/data'
import { Section, Container, Title } from '../shared/styles'

export default class ProjectList extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Project List</Title>
          {projectListJSON.map(project => (
            <ul key={project.id}>
              <li>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  See project
                </a>
              </li>
              <hr />
            </ul>
          ))}
        </Container>
      </Section>
    )
  }
}
