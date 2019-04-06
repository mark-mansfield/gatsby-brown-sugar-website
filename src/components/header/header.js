import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import "./header.module.css"
import logo from "../../images/logo-dark.png"
import Scroll from "../Scroll"

const Header = props => (
  <header className={styles.main__header}>
    <div className={styles.flex_row} id="welcome">
      <div style={{ textAlign: "center" }}>
        <h1>Welcome To</h1>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.flex_col} id="cta">
        <Scroll type="id" element="menus">
          <button>VIEW MENU</button>
        </Scroll>
        <Scroll type="id" element="intro">
          <button>BOOK A TABLE</button>
        </Scroll>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
