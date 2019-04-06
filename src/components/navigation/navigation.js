import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "../Scroll"

const Navigation = props => {
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
          <Scroll type="id" element="menus">
            <a href="#">menus</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="drinks">
            <a href="#">drinks</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="gallery">
            <a href="#">gallery</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="groups">
            <a href="#">groups</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="reservations">
            <a href="#">reservations</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="contact">
            <a href="#">contact</a>
          </Scroll>
        </li>
      </Scrollspy>
    </nav>
    // <div className={styles.nav}>
    //   <div>
    //     <Link to="/menu">menus</Link>
    //   </div>
    //   <div>
    //     <Link to="/drinks">drinks</Link>
    //   </div>
    //   <div>
    //     <Link to="/gallery">gallery</Link>
    //   </div>
    //   <div>
    //     <Link to="/">
    //       <img src={Logo} style={{ height: "80px", marginTop: "20px" }} />
    //     </Link>
    //   </div>
    //   <div>
    //     <Link to="/groups">groups</Link>
    //   </div>
    //   <div>
    //     <Link to="/reservations">reservations</Link>
    //   </div>
    //   <div>
    //     <Link to="/contact">contact us</Link>
    //   </div>
    // </div>
  )
}

export default Navigation
