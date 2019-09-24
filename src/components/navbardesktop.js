import React from 'react'
import Menu from 'antd/lib/menu'
import Link from 'next/link'
import styled from 'styled-components'
// import LogoSvg from 'static/images/logo.svg'

const NavbarWrapper = styled.nav`
  float: right;
  @media only screen and (max-width: 769.99px) {
    display: none;
  }
  li {
    padding: 0;
    div.ant-menu-submenu-title {
      padding: 0 10px;
    }
    &.ant-menu-item {
      top: 0px;
      a {
        color: ${({ theme }) => theme.colors.navbarLink};
        padding: 0 15px;
        &:hover,
        &.active {
          color: ${({ theme }) => theme.colors.navbarLinkHover};
        }
        &:before {
          bottom: 0px;
        }
      }
    }
    &.ant-menu-overflowed-submenu {
      display: none;
    }
    &.ant-menu-submenu {
      top: 0px;
      .ant-menu-submenu-title {
        &:active {
          background: transparent;
        }
        &:hover {
          color: #0046bb;
        }
        i {
          &.anticon {
            margin-right: 0px;
          }
          &.ant-menu-submenu-arrow {
            display: none;
          }
        }
      }
    }
  }
`

const NavLogo = styled.div`
  float: left;
  height: 50px;
  a {
    display: inline-block;
    height: 50px;
    svg {
      position: relative;
      font-size: 30px;
      right: 2px;
      top: 6px;
    }
    span {
      color: ${({ theme }) => theme.colors.navbarLogoLink};
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 24px;
      h4 {
        display: inline;
        color: #ffff;
        /* background: -webkit-linear-gradient(#eee, #333); */
        background: linear-gradient(to right, #00bcd4 0%, #0fe018 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        font-size: 14px;
      }
    }
  }
`

const NavbarDesktop = () => {
  return (
    <>
      <NavLogo>
        <Link href="/">
          <a title="linenaja.com">
            {/* <LogoSvg /> */}
            <img
              src="static/images/linenaja_logo.svg"
              style={{
                width: '40px',
                marginRight: '10px',
                marginTop: '-10px',
                // border: '1px solid #e8e8e8',
              }}
            />
            <span>
              Line<h4>NaJa</h4>
            </span>
          </a>
        </Link>
      </NavLogo>
      <NavbarWrapper>
        <Menu mode="horizontal" triggerSubMenuAction="click">
          <Menu.Item>
            <Link href="/">
              <a title="Home">หน้าหลัก</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about">
              <a title="About">เกี่ยวกับเรา</a>
            </Link>
          </Menu.Item>
        </Menu>
      </NavbarWrapper>
    </>
  )
}

export default NavbarDesktop
