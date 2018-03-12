import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Logo = styled.div`
  margin-bottom: 15px;

  a {
    color: rgba(255, 255, 255, 0.75);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;

    &:hover {
      color: #fff;
    }

    &:focus {
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding: 0;
  margin: 0;

  li {
    margin: 0;

    &:hover i {
      color: #fff !important;
    }

    i {
      transition: color 0.3s;
      color: rgba(255, 255, 255, 0.75);
      font-size: 28px !important;
    }
  }

  @media (min-width: 768px) {
    width: auto;

    li {

      &:not(:last-child) {
        margin-right: 40px;
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
          <Link to="/about">
            <Icon type="idcard" />
          </Link>
        </li>
        <li>
          <Link to="/work">
            <Icon type="hdd" />
          </Link>
        </li>
        <li>
          <Link to="/project">
            <Icon type="rocket" />
          </Link>
        </li>
        <li>
          <Link to="/playground">
            <Icon type="smile-o" />
          </Link>
        </li>
        <li>
          <Link to="/social">
            <Icon type="coffee" />
          </Link>
        </li>
      </Menu>
    </Nav>
  )
}
