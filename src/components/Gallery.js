import React from 'react'
import Carousel from 'react-grid-carousel'
import vansCheckered from '../images/vans/vans_checkered.png'
import vansJumping from '../images/vans/vans_jumping.png'
import vansSand from '../images/vans/vans_sand.png'
import vansPlatform from '../images/vans/vans_platform.png'
import vansSkateboard from '../images/vans/vans_skateboard.png'
import vansStairs from '../images/vans/vans_stairs.png'
import vansWhite from '../images/vans/vans_white.png'
import vansSky from '../images/vans/vans_sky.png'
import vansRed from '../images/vans/vans_red.png'

const Gallery = () => {
  return (
    <div class="slider">
    
    <Carousel cols={3} rows={1} gap={10} loop={true} hideArrow={true} showDots={true} autoplay={2000}>
      <Carousel.Item>
        <img width="100%" src={vansPlatform} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={vansSand} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={vansJumping} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={vansSkateboard} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={vansCheckered} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={vansStairs} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={vansWhite} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={vansSky} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={vansRed} />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
  )
}

export default Gallery;