import React from 'react'

import Carousel from './Carousel'
import '../../scss/home.scss'
import Img from '../../data/Img'

const HomePage = () => {
  const { carouselImg } = Img
  return (
    <>
      <Carousel img={carouselImg} />
    </>
  )
}

export default HomePage
