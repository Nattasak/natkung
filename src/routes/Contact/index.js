import { Icon } from 'antd'
import React from 'react'
import styled from 'styled-components'

import { PageTitle, Section, Container } from '../../shared/styles'

const SocialWrapper = styled.div`
  ul {
    margin: 0;
  }

  a {
    &.twitter i {
      color: #17ace9;
    }

    &.github i {
      color: #000;
    }

    &.medium i {
      color: #000;
    }
  }

  li {
    display: inline-block;
    margin: 10vw;
  }

  i {
    font-size: 20vw !important;
  }

  /* [ Tablets ] */
  @media (min-width: 768px) {
    li {
      margin: 8vw;
    }
    i {
      font-size: 13vw !important;
    }
  }

  /* [ Desktops ] */
  @media (min-width: 1025px) {
    li {
      margin: 7vw;
    }
    i {
      font-size: 9vw !important;
    }
  }
`

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Social</PageTitle>
        <Section>
          <Container>
            <SocialWrapper>
              <ul>
                <li>
                  <a href="https://twitter.com/NatZa55490826" className="twitter hvr-grow">
                    <Icon type="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Nattasak" className="github hvr-grow">
                    <Icon type="github" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@nattasak111" className="medium hvr-grow">
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
