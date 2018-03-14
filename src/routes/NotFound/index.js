import React from 'react'
import styled from 'styled-components'

import { PageTitle } from '../../shared/styles'

const NotFoundWrapper = styled.div`
  color: black;
  font-size: 4vw;
  font-weight: bold;
`

export default () => {
  return (
    <div>
      <PageTitle>404</PageTitle>
      <NotFoundWrapper>
        Whoops. Looks like what you're looking for can't be found 😅
      </NotFoundWrapper>
    </div>
  )
}
