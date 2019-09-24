import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
import { BackTopWrapper, HelloWorldWrapper } from './index.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const Home = () => (
  <Layout className="layout">
    <Content>
      <Slider {...settings}>
        <div>
          <img
            style={{ width: '900px' }}
            src="https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ></img>
        </div>
        <div>
          <img
            style={{ width: '900px' }}
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          ></img>
        </div>

        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <HelloWorldWrapper>
        <p>Hello world</p>
        Hello
      </HelloWorldWrapper>
    </Content>
  </Layout>
)

export default Home
