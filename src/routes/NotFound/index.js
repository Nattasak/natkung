import React from 'react'
import styled from 'styled-components'

import { PageTitle } from '../../shared/styles'

const NotFoundWrapper = styled.div`
  font-size: 8vw;
  color: black;
  font-weight: bold;
`

export default () => {
  return (
    <div>
      <PageTitle>404</PageTitle>
      <NotFoundWrapper>
        Oh my god!! 404
        <br />
        O__O
      </NotFoundWrapper>
    </div>
  )
}
