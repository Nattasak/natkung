import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;

  @media (min-width: 768px) {
    min-height: initial;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Logo = styled.div`
  a {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.1em;
    letter-spacing: 1px;

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    a {
      font-size: 1em;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0;
  margin: 1em 0 .4em;

  li {
    margin: 0;

    &:hover i {
      color: #fff !important;
    }

    i {
      transition: color 0.3s;
      color: rgba(255, 255, 255, 0.75);
      font-size: 1.2em !important;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
    width: auto;

    li {

      &:not(:last-child) {
        margin-right: 40px !important;
      }
    }
  }
`

export default () => {
  return (
    <Nav>
      <Logo>
        <Link to="/home">Nattasak L.</Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/home">
            <Icon type="home" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Icon type="idcard" />
          </Link>
        </li>
        <li>
          <Link to="/project">
            <Icon type="rocket" />
          </Link>
        </li>
        <li>
          <Link to="/playground">
            <Icon type="coffee" />
          </Link>
        </li>
        <li>
          <a href="http://github.com/Nattasak">
            <Icon type="github" />
          </a>
        </li>
      </Menu>
    </Nav>
  )
}
