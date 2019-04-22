import React from "react"
import Flickity from "react-flickity-component"

import "../../styles/flickity.css"
const flickityOptions = {
  initialIndex: 1,
  accessibility: true,
  pageDots: false,
  wrapAround: true,
  draggable: true,
  setGallerySize: true,
  lazyLoad: 2,
}

function Carousel() {
  return (
    <div>
      <Flickity options={flickityOptions}>
        <img
          className="images_gallery_slider-image"
          src="https://placeimg.com/640/480/animals"
          alt=""
        />
        <img
          className="images_gallery_slider-image"
          src="https://placeimg.com/640/480/nature"
          alt=""
        />
        <img
          className="images_gallery_slider-image"
          src="https://placeimg.com/640/480/architecture"
          alt=""
        />
        <img
          className="images_gallery_slider-image"
          src="https://placeimg.com/640/480/architecture"
          alt=""
        />
        <img
          className="images_gallery_slider-image"
          src="https://placeimg.com/640/480/architecture"
          alt=""
        />
      </Flickity>
    </div>
  )
}
export default Carousel
