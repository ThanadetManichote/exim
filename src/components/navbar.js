import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { useSelector } from 'redux/hook'
import Container from './Container'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'

const NavbarHeader = styled.header`
  overflow: hidden;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: ${({ theme }) => theme.colors.navbarBg};
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 1px rgba(0, 0, 0, 0.1);
  .ant-menu-horizontal {
    color: #5062aa;
    background: transparent;
    line-height: 50px;
    border-bottom: 0;
    float: right;
    li {
      border-bottom: 0;
    }
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    border-bottom: 0;
    color: #d0115c;
  }
`

const Navbar = () => {
  const getIsMobile = useSelector((state) => state.get('app').get('isMobileState'))
  return (
    <NavbarHeader>
      <Container>
        <Row gutter={14}>
          {/* <NavbarDesktop></NavbarDesktop> */}
          <Col>{getIsMobile ? <NavbarMobile /> : <NavbarDesktop />}</Col>
        </Row>
      </Container>
    </NavbarHeader>
  )
}
export default Navbar
