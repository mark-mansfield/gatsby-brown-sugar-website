import React from "react"
import Helmet from "react-helmet"
import Modal from "react-modal"
import Layout from "../components/layout/layout.1"
import Header from "../components/header/header.1"
import SubNav from "../components/navigation/sub__nav"
// import Food from "../components/menus/food/food"
// import Drinks from "../components/menus/drinks/drinks"
// import ContactForm from "../components/contact/contact"
import Reservation from "../components/reservation/reservation"

// https://react-icons.netlify.com/#/icons/md
import { MdClose } from "react-icons/md"

Modal.setAppElement("#___gatsby")

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      modalIsOpen: false,
    }

    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  _handleShowModal = () => {
    console.log("Setting state of isOpen")
    this.setState({
      modalIsOpen: true,
    })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    // modal styling
    // transition styling found in ../styles/global.css
    const style = {
      content: {
        position: "relative",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        border: "0",
        borderRadius: "4px",
        background: "rgba(45,45,45,0.75)",
      },

      overlay: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        zIndex: 20000,
      },
    }

    return (
      <Layout>
        <Helmet title="Brown Sugar - v2" />

        <Header modalState={this._handleShowModal.bind(this)} />

        <Modal
          closeTimeoutMS={300}
          style={style}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div
            className="modal__toolbar"
            ref={toolbar => (this.toolbar = toolbar)}
          >
            <div ref={close => (this.close = close)} onClick={this.closeModal}>
              <MdClose className="modal__close" />
            </div>
          </div>
          <h2 style={{ color: "white" }}>
            Make a booking with our booking partner
          </h2>
          <br />
          <Reservation />
        </Modal>
        <SubNav sticky={this.state.stickyNav} />
      </Layout>
    )
  }
}

export default Index
