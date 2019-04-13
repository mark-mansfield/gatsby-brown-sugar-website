import React from "react"

import logo from "../../images/logo-dark.png"
import Scroll from "../Scroll"

class Header extends React.Component {
  showModal() {
    this.props.modalState()
  }

  render() {
    return (
      <header className="main__header">
        <div className="main__header-welcome">
          <div>
            <h1 className="main__header-title">Welcome To</h1>
            <img className="main__header-logo" src={logo} alt="logo" />
          </div>
          <div className="main__header-cta" id="cta">
            <Scroll type="id" element="menu__navigation">
              <button className="main__header-button-1">VIEW MENU</button>
            </Scroll>
            <button
              className="main__header-button-2"
              onClick={this.showModal.bind(this)}
            >
              BOOK A TABLE
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
