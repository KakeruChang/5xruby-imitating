import React from 'react'
import PropTypes from 'prop-types'

import Carousel from './Carousel'
import MainMenu from './MainMenu'
import '../../scss/home.scss'

const HomePage = props => {
  const { Img, data } = props

  return (
    <>
      <Carousel img={Img.carouselImg} />
      <MainMenu data={data.mainMenu} img={Img.mainMenuImg} />
    </>
  )
}

HomePage.propTypes = {
  Img: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default HomePage
