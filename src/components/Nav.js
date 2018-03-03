import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav``

export default () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <a href="http://github.com/Nattasak" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </Nav>
  )
}
