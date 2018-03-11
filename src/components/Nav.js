import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  min-height: 100vh;
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
    font-size: 1.5em;
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
  flex-direction: column;
  align-items: center;
  flex-grow: 0.7;
  padding: 0;
  margin: 1.5em 0;

  li {
    list-style-type: none;
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 60px;
    }

    &:hover i {
      color: #fff !important;
    }

    i {
      transition: color 0.3s;
      color: rgba(255, 255, 255, 0.75);
      font-size: 3em !important;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 0;
    margin: 0;

    li {
      margin: 0 !important;

      &:not(:last-child) {
        margin-right: 40px !important;
      }

      i {
        font-size: 1.2em !important;
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
