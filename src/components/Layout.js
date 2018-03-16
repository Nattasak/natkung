import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Header from './Header'

injectGlobal`
  :root {
    --main-font-family: 'Open Sans', sans-serif;
    --main-font-size: 17px;
    --main-link-color: #0366d6;
    --main-link-hover-color: #024ea4;
    --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  }
  body {
    counter-reset: item; /* Counters */
  }
`

const PageContainer = styled.div`
  font-family: var(--main-font-family);
  font-size: var(--main-font-size);
`

const ChildrenWrapper = styled.main`
  padding: 2rem 1.5rem;

  a {
    color: var(--main-link-color);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--main-link-hover-color);
    }
  }

  /* Grow */
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  /* Bob */
  @-webkit-keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @-webkit-keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  .hvr-bob {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
  }
  .hvr-bob:hover,
  .hvr-bob:focus,
  .hvr-bob:active {
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <PageContainer>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </PageContainer>
    )
  }
}
