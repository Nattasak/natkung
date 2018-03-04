import { Icon, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  margin-left: 20px;

  a {
    color: rgba(255, 255, 255, 0.75);

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;

  li {
    margin: 0 20px;

    i {
      transition: color 0.3s;
    }

    &:hover i {
      color: #fff !important;
    }
  }
`

export default () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">Nattasak L.</Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/">
            <Icon type="home" style={{ fontSize: '1.2em', color: 'rgb(123, 123, 123)' }} />
          </Link>
        </li>
        <li>
          <Tooltip placement="bottom" title="Profile">
            <Link to="/profile">
              <Icon type="idcard" style={{ fontSize: '1.2em', color: 'rgba(255, 255, 255, 0.75)' }} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom" title="Project">
            <Link to="/project">
              <Icon type="rocket" style={{ fontSize: '1.2em', color: 'rgba(255, 255, 255, 0.75)' }} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom" title="Github">
            <a href="http://github.com/Nattasak">
              <Icon type="github" style={{ fontSize: '1.2em', color: 'rgba(255, 255, 255, 0.75)' }} />
            </a>
          </Tooltip>
        </li>
      </Menu>
    </Nav>
  )
}
