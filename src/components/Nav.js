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

    &:hover {
      i {
        color: #fff !important;
      }
    }

    i {
      color: rgba(255, 255, 255, 0.75);
      font-size: 28px !important;
      transition: color 0.3s;
    }

    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    width: 40%;

    li {
      width: 100%;

      &:hover {
        i {
          opacity: 0;
        }
        span {
          opacity: 1;
        }
      }
    }

    a {
      position: relative;
      display: block;
    }

    i {
      width: 100%;
      transition: all 0.3s ease-out !important;
    }

    span {
      content: ' ';
      font-size: 10px;
      letter-spacing: 2px;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      display: block !important;
      position: absolute;
      bottom: 7px;
      width: 100%;
      opacity: 0;
      transition: all 0.3s ease-out;
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
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Icon type="idcard" />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/work">
            <Icon type="hdd" />
            <span>Work</span>
          </Link>
        </li>
        <li>
          <Link to="/project">
            <Icon type="rocket" />
            <span>Project</span>
          </Link>
        </li>
        <li>
          <Link to="/playground">
            <Icon type="smile-o" />
            <span>Play</span>
          </Link>
        </li>
        <li>
          <Link to="/social">
            <Icon type="coffee" />
            <span>Social</span>
          </Link>
        </li>
      </Menu>
    </Nav>
  )
}
