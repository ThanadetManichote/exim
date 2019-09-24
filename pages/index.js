import React from 'react'
import {Layout} from 'antd'
const { Header, Content, Footer } = Layout
import {BackTopWrapper,HelloWorldWrapper} from './index.style'


const Home = () => (
  <Layout className="layout">
    <Content>
      <HelloWorldWrapper>
      <p>Hello world</p>
      Hello
      </HelloWorldWrapper>
    </Content>
  </Layout>
)

export default Home
