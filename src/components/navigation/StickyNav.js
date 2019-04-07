import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "../Scroll"

const StickyNav = props => {
  return (
    <nav id="nav" className={props.sticky ? "alt" : ""}>
      <Scrollspy
        items={[
          "menus",
          "drinks",
          "gallery",
          "groups",
          "reservations",
          "contact",
        ]}
        currentClassName="is-active"
        offset={-300}
      >
        <li>
          <Scroll type="id" element="menus_navigation">
            <button className="simple-button">menus</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="drinks_navigation">
            <button className="simple-button">drinks</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="gallery">
            <button className="simple-button">gallery</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="groups">
            <button className="simple-button">groups</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="reservations">
            <button className="simple-button">reservations</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="contact">
            <button className="simple-button">contact</button>
          </Scroll>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default StickyNav
