import React from "react"
import Carousel from "nuka-carousel"
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

class imageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCarousel: false,
    }
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({ showCarousel: true })
    }
  }

  render() {
    return (
      <div>
        {this.state.showCarousel && (
          <Carousel>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
          </Carousel>
        )}
      </div>
    )
  }
}
export default imageCarousel
