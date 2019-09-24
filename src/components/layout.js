import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import { baseHref } from 'helpers/app'
import { useActions } from 'redux/hook'
import { isMobileAction } from 'redux/app/actions'
import Navbar from './Navbar'
import Footer from './Footer'
import Container from './Container'
// import 'styles/less/ant-theme-vars.less'
import {

  LayoutContent,
} from './index.style'

const ContentWrapper = styled.main`
  min-height: 650px;
  @media only screen and (max-width: 575px) {
    min-height: 400px;
  }
`
const SectionWrapper = styled.section`
  position: relative;
  padding: 70px 0 15px 0;
  min-height: 650px;
  &::after {
    clear: both;
    display: table;
    content: ' ';
  }
  @media only screen and (max-width: 1229px) {
    padding: 60px 0 15px 0;
  }
`


const Layout = ({ children }) => {
  const [setIsMobile] = useActions([isMobileAction])

  

  const handlerEnquireScreen = useCallback(() => {
    enquireScreen(
      (isMobile) => setIsMobile(!!isMobile),
      'only screen and (max-width: 769.99px)',
    )
  }, [setIsMobile])

  useEffect(() => {
    const enquireHandler = handlerEnquireScreen()
    return () => {
      unenquireScreen(enquireHandler)
    }
  }, [handlerEnquireScreen])

  return (
    <>
      <Helmet>
        <title>Linenaja.com</title>
        {/* <base href={baseHref()} /> */}
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="linenaja" />
        <meta name="description" content="linenaja" />
      </Helmet>
      <Navbar />
      <LayoutContent>
      <ContentWrapper>
        <SectionWrapper>
          <Container>{children}</Container>
        </SectionWrapper>
      </ContentWrapper>
      </LayoutContent>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default Layout
