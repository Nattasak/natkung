import { Icon } from 'antd'
import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container } from '../../shared/styles'

const SocialWrapper = styled.div`
  width: 50vw;
  height: 50vh;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 0;
  }

  i {
    font-size: 10vh !important;
  }

  @media (min-width: 768px) {
    ul {
      flex-direction: row;
    }

    i {
      font-size: 10vw !important;
    }
  }
`

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Contact</PageTitle>
        <Section>
          <Container>
            <SocialWrapper>
              <ul>
                <li>
                  <a href="https://github.com/Nattasak">
                    <Icon type="github" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NatZa55490826">
                    <Icon type="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@nattasak111">
                    <Icon type="medium" />
                  </a>
                </li>
              </ul>
            </SocialWrapper>
          </Container>
        </Section>
      </div>
    )
  }
}
