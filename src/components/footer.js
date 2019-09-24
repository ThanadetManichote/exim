import React from 'react'
import { Icon } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
// import LogoSvg from 'static/images/logo_footer.svg'
import Container from './Container'
import { Layout, Row, Col } from 'antd'
const { Content } = Layout

const FooterWrapper = styled.footer`
  position: relative;
`

const FooterBottom = styled.div`
  display: flex;
  line-height: 30px;
  background-color: #23282e;
`

const FooterBottomCenter = styled.div`
  flex: 1;
  text-align: center;
  a {
    font-size: 12px;
    color: #afb5c4;
    span {
      span {
        font-size: 13px;
        h2 {
          display: inline;
          color: #afb5c4;
        }
      }
    }
  }
`

const FooterTop = styled.div`
  /* display: flex; */
  background: #3f4752;
  color: #efefef;
  font-size: 12px;
  line-height: 30px;
  .topicFooter > span {
    font-size: 15px;
    background-color: #de3f75;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
  }
`
const FooterFlex = styled.div`
  display: flex;
  line-height: 100px;
  /* background: red; */
`

const FooterFlexLeft = styled.div`
  flex: 1;
  text-align: left;
  /* background-color: yellow; */
  a {
    font-size: 6px;
    color: #fff;
  }
`
const FooterFlexRight = styled.div`
  flex: 1;
  text-align: right;
  /* background-color: green; */
  a {
    font-size: 6px;
    color: #fff;
  }
`

const FooterFlexCenter = styled.div`
  flex: 1;
  text-align: center;
  a {
    font-size: 10px;
    color: #fff;
  }
`
const footerLeftLayout = {
  xs: { span: 24, push: 0 },
  xs: { span: 20, push: 2 },
  sm: { span: 20, push: 2 },
  md: { span: 24, push: 2 },
  lg: { span: 14, push: 1 },
  xl: { span: 12, push: 3 },
}
const footerRightLayout = {
  xs: { span: 24, push: 0 },
  xs: { span: 24, push: 2 },
  sm: { span: 24, push: 2 },
  md: { span: 24, push: 2 },
  lg: { span: 10, push: 1 },
  xl: { span: 12, push: 3 },
}
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <Row>
          <Col {...footerLeftLayout} style={{ backgroundColor: '3f4752' }}>
            <Row>
              <br />
              <Col className="topicFooter">
                <span>เกี่ยวกับเรา</span>
              </Col>
              <Col>
                เว็บไซต์แห่งนี้เปิดให้บริการฟรี เปิดให้ผู้ใช้งานได้แลกเปลี่ยนไลน์ไอดีกัน
                เพื่อสามารถหาเพื่อน หรือหาแฟน เท่านั้น
              </Col>
              <Col>
                เราเปิดช่องทางให้คนทั่วไป สามารถมีโอกาสได้พบและรู้จักกัน คนโสด คนเหงา
                จะได้มีแฟน มีเพื่อนคุยกัน คอยให้คำปรึกษากัน
              </Col>
              <Col> </Col>
              <Col>หากมีข้อสงสัยหรือแนะนำติชม โปรดติดต่อเรา </Col>
              <br />
            </Row>
          </Col>
          <Col {...footerRightLayout} style={{ backgroundColor: '3f4752' }}>
            <Row>
              <br />
              <Col className="topicFooter">
                <span>ติดต่อเรา</span>
              </Col>
              <Col>อีเมล : linenaja@gmail.com ( จะติดต่อกลับภายใน 24 ชม. )</Col>
              <Col>เพจเฟสบุ๊ค : https://www.facebook.com/linenaja (ภายใน 1-4 ชม.)</Col>
              <Col>
                Icon made by{' '}
                <a href="https://www.flaticon.com/authors/fjstudio" target="blank">
                  fjstudio
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com" target="blank">
                  www.flaticon.com
                </a>
              </Col>
              <br />
            </Row>
          </Col>
        </Row>
        {/* <FooterFlex>
          <FooterFlexLeft style={{ backgroundColor: 'green' }}>
            <Link href="/">
              <a title="Logo">
                <span>JERWA</span>
              </a>
            </Link>
          </FooterFlexLeft>
          <FooterFlexRight style={{ backgroundColor: 'blue' }}>
            <a href="#">
              <Icon type="facebook" theme="outlined" />
            </a>
          </FooterFlexRight>
        </FooterFlex> */}
      </FooterTop>
      <FooterBottom>
        <FooterBottomCenter>
          <Link href="/">
            <a title="Logo">
              {/* <LogoSvg /> */}

              <span>
                <img
                  src="static/images/linenaja_logo.svg"
                  style={{
                    width: '20px',
                    marginRight: '10px',
                    marginTop: '-5px',
                    // border: '1px solid #e8e8e8',
                  }}
                />
                <span>
                  Line<h2>NaJa</h2>
                </span>
                <span> ©</span> 2019 Linenaja.com All rights reserved.
              </span>
            </a>
          </Link>
        </FooterBottomCenter>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
