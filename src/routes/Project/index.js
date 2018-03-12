import React from 'react'
import styled from 'styled-components'

import ProjectList from '../../components/ProjectList'

export const Title = styled.h1`
  color: black;
  font-size: 1.3em;
  font-weight: 600;
  letter-spacing: 1px;
`

export default () => {
  return (
    <div>
      <Title>Project</Title>
      <ProjectList />
    </div>
  )
}
