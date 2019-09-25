import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
import { BackTopWrapper, HelloWorldWrapper } from './index.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { apiGetImages } from 'api/images'
import isArray from 'lodash/isArray'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Home = (props) => {
  const [getImagesList, setImagesList] = useState([])
  useEffect(() => {
    imagesList()
  }, [])

  const imagesList = async () => {
    const { images } = await apiGetImages()
    if (isArray(images) && images.length > 0) setImagesList(images)
  }

  const DataImages = () => {
    console.log('getImagesList', getImagesList)
    if (getImagesList.length > 0)
      return getImagesList.map(({ url, ID }) => {
        return (
          <div>
            <img style={{ width: '900px', height: '660px' }} src={url}></img>
          </div>
        )
      })
  }

  return (
    <Layout className="layout">
      <Content>
        <Slider {...settings}>{DataImages()}</Slider>
        <HelloWorldWrapper>
          <p>Hello world</p>
          Hello
        </HelloWorldWrapper>
      </Content>
    </Layout>
  )
}

export default Home
