import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Icon } from 'antd'
//import Scrollbar from 'react-smooth-scrollbar'
import Drawer from 'rc-drawer'
import styled from 'styled-components'
import 'rc-drawer/assets/index.css'

export const MenuNavMobile = styled.div`
  display: flex;
  > div {
    flex: 1;
    &:nth-child(1) {
      text-align: left;
    }
    &:nth-child(2) {
      flex: 2;
      text-align: center;
    }
    &:nth-child(3) {
      text-align: right;
    }
  }
`

const MenuNavIcon = styled.div`
  padding: 14px 0px;
  line-height: 0;
  i {
    color: #ffffff;
    font-size: 22px;
  }
`
const DrawerWrapper = styled(Drawer)`
  .drawer-content-wrapper {
    touch-action: none;
    .drawer-content {
      box-shadow: 0px 0px 3px 1px rgba(51, 51, 51, 0.18), 0 2px 3px rgba(0, 0, 0, 0.2);
      ul {
        background: #fff;
        li {
          margin: 0px;
          &:after {
            border-right: 0;
          }
        }
      }
    }
    .drawer-handle {
      top: 205px;
    }
  }
`
const DrawerDetail = styled.div`
  width: 240px;
  height: 100%;
  padding: 5px 0 5px 0;
  div {
    &.scrollbar-track-y {
      width: 4px;
      div {
        &.scrollbar-thumb {
          width: 4px;
          background: #6d6d6d;
          border-radius: 0px;
        }
      }
    }
  }
`
const NavLogo = styled.div`
  height: 50px;
  a {
    display: inline-block;
    height: 50px;
    span {
      color: #ffffff;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 20px;
      position: relative;
      bottom: 1px;
    }
  }
`

const NavberMobile = () => {
  const [heightMenuRight, setHeightMenuRight] = useState(0)
  const [collapsedLeft, setCollapsedLeft] = useState(false)
  const [collapsedRight, setCollapsedRight] = useState(false)

  useEffect(() => {
    handleHeightMenuRight()
    window.addEventListener('resize', handleHeightMenuRight)
    return () => {
      window.removeEventListener('resize', handleHeightMenuRight)
    }
  }, [])

  const handleHeightMenuRight = () => {
    setHeightMenuRight(document.body.clientHeight - 10)
  }

  const handleToggleLeft = () => {
    setCollapsedLeft(!collapsedLeft)
  }

  const handleToggleRight = () => {
    setCollapsedRight(!collapsedRight)
  }

  return (
    <>
      <MenuNavMobile>
        <div>
          <MenuNavIcon onClick={handleToggleLeft}>
            <Icon type="menu-unfold" theme="outlined" />
          </MenuNavIcon>
        </div>
        <div>
          <NavLogo>
            <Link href="/">
              <a title="linenaja.com">
                <span>LINENAJA</span>
              </a>
            </Link>
          </NavLogo>
        </div>
        <div>
          <MenuNavIcon onClick={handleToggleRight}>
            <Icon type="appstore" />
          </MenuNavIcon>
        </div>
      </MenuNavMobile>
      <DrawerWrapper
        open={collapsedLeft}
        level={null}
        placement="left"
        handler={
          collapsedLeft ? (
            <div className="drawer-handle">
              <i className="drawer-handle-icon" />
            </div>
          ) : (
            false
          )
        }
        onClose={handleToggleLeft}
        onHandleClick={handleToggleLeft}
      >
        <Menu style={{ width: 240 }} defaultSelectedKeys={['menu_home']} mode="inline">
          <Menu.Item key="menu_home">
            <Link href="/">
              <a title="Home">
                <Icon type="home" />
                หน้าหลัก
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_about">
            <Link href="/about">
              <a title="About">
                <Icon type="heart" />
                เกี่ยวกับเรา
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_home">
            <Link href="/">
              <a title="Home">
                <Icon type="home" />
                หน้าหลัก
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_about">
            <Link href="/about">
              <a title="About">
                <Icon type="heart" />
                เกี่ยวกับเรา
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_home">
            <Link href="/">
              <a title="Home">
                <Icon type="home" />
                หน้าหลัก
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_about">
            <Link href="/about">
              <a title="About">
                <Icon type="heart" />
                เกี่ยวกับเรา
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_home">
            <Link href="/">
              <a title="Home">
                <Icon type="home" />
                หน้าหลัก
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_about">
            <Link href="/about">
              <a title="About">
                <Icon type="heart" />
                เกี่ยวกับเรา
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_home">
            <Link href="/">
              <a title="Home">
                <Icon type="home" />
                หน้าหลัก
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="menu_about">
            <Link href="/about">
              <a title="About">
                <Icon type="heart" />
                เกี่ยวกับเรา
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      </DrawerWrapper>
      <DrawerWrapper
        open={collapsedRight}
        level={null}
        placement="right"
        handler={
          collapsedRight ? (
            <div className="drawer-handle">
              <i className="drawer-handle-icon" />
            </div>
          ) : (
            false
          )
        }
        onClose={handleToggleRight}
        onHandleClick={handleToggleRight}
      >
        <DrawerDetail> {/*heightMenuRight*/}</DrawerDetail>
      </DrawerWrapper>
    </>
  )
}

export default NavberMobile
