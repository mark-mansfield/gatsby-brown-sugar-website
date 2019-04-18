import React from "react"
import Helmet from "react-helmet"
import Modal from "react-modal"
import Layout from "../components/layout/layout.1"
import Header from "../components/header/header.1"
import SubNav from "../components/navigation/sub__nav"
import GoogleMap from "../components/google_maps/map"
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
      showAllTimes: false,
      showMaps: false,
      dynamicClassNameList: "",
    }

    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.toggleTimesVisibility = this.toggleTimesVisibility.bind(this)
    this.toggleAllDetailsExceptLocation = this.toggleAllDetailsExceptLocation.bind(
      this
    )
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

  toggleTimesVisibility() {
    this.setState({ showAllTimes: !this.state.showAllTimes })
  }

  toggleAllDetailsExceptLocation() {
    this.setState({ showMaps: !this.state.showMaps })

    // console.log(this.state.showMaps)
    if (this.state.showMaps) {
      this.setState({
        dynamicClassNameList: (this.state.dynamicClassNameList =
          "map-invisible"),
      })
    } else {
      this.setState({
        dynamicClassNameList: (this.state.dynamicClassNameList = "map-visible"),
      })
    }
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

    // open times
    const openTimes = [
      { label: "now", time: "11am - 11pm" },
      { label: "mon-sat", time: "2pm - 11pm" },
      { label: "sun", time: "11am -10:30pm" },
    ]

    const dynamicClassNames = [
      "section__details-column",
      this.state.dynamicClassNameList,
    ]
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
        <SubNav
          sticky={this.state.stickyNav}
          modalState={this._handleShowModal.bind(this)}
        />
        <section id="overview">
          <div className="page_section container">
            <div className="page-section-wrapper">
              <div className="page-section-inner">
                <div className="section__details">
                  {/* open hours */}
                  {!this.state.showMaps && (
                    <div className="section__details-column">
                      <div className="section__details-column_title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 45.6 45.6"
                        >
                          <g>
                            <path d="M22.8,45.6C10.2,45.6,0,35.4,0,22.8S10.2,0,22.8,0s22.8,10.2,22.8,22.8S35.4,45.6,22.8,45.6z M22.8,3C11.9,3,3,11.9,3,22.8   s8.9,19.8,19.8,19.8s19.8-8.9,19.8-19.8S33.7,3,22.8,3z" />
                            <polygon points="22.8,24.1 22.8,12.6 19.8,12.6 19.8,25.5 19.8,25.5 19.8,25.5 28.4,33 30.2,30.7  " />
                          </g>
                        </svg>
                        <span>OPEN HOURS</span>
                      </div>
                      <div className="section__details-column-inner">
                        <div className="section__details-times">
                          <p className="section_details-times-row">
                            <strong>Today</strong>
                            <span>11:30 am - 12:00 am</span>
                          </p>
                          {this.state.showAllTimes && (
                            <div className="more-times">
                              {openTimes.map(function(d, index) {
                                return (
                                  <div>
                                    <li
                                      style={{ listStyleType: "none" }}
                                      key={d.label}
                                    >
                                      {d.label + ":" + d.time}
                                    </li>
                                  </div>
                                )
                              })}
                            </div>
                          )}
                          {!this.state.showAllTimes && (
                            <button
                              className="cta cta--small cta--down"
                              onClick={this.toggleTimesVisibility}
                            >
                              <span className="cta-text">Show more</span>
                            </button>
                          )}
                          {this.state.showAllTimes && (
                            <button
                              className="cta cta--small cta--down"
                              onClick={this.toggleTimesVisibility}
                            >
                              <span className="cta-text">Show less</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* location */}
                  {/* className is now dynamic */}
                  <div className={dynamicClassNames.join(" ")}>
                    <div className="section__details-column_title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 18"
                      >
                        <path
                          fill="currentColor"
                          d="M7.4,18.4l-5.2-6.5c-1.1-1.2-1.7-2.9-1.7-4.5c0-3.8,3.1-6.9,6.9-6.9c3.8,0,6.9,3.1,6.9,6.9  c0,1.7-0.6,3.3-1.7,4.5L7.4,18.4z M7.4,1.5c-3.2,0-5.9,2.6-5.9,5.9c0,1.4,0.5,2.8,1.5,3.9l4.4,5.5l4.4-5.5c1-1.1,1.5-2.5,1.5-3.9  C13.3,4.1,10.6,1.5,7.4,1.5z M7.4,10.2c-1.5,0-2.8-1.3-2.8-2.8c0-1.5,1.3-2.8,2.8-2.8c1.5,0,2.8,1.3,2.8,2.8  C10.2,8.9,8.9,10.2,7.4,10.2z M7.4,5.6c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8C9.2,6.4,8.4,5.6,7.4,5.6z"
                        />
                      </svg>
                      <span>LOCATION</span>
                    </div>
                    <div className="section__details-column-inner">
                      <p>106 Curlewis St, Bondi Beach NSW 2026</p>
                      {!this.state.showMaps && (
                        <button
                          className=" cta cta--small cta--down  sub__nav-button"
                          onClick={this.toggleAllDetailsExceptLocation}
                        >
                          Map &amp; directions
                        </button>
                      )}
                      {this.state.showMaps && (
                        <button
                          className="cta cta--small cta--down  sub__nav-button"
                          onClick={this.toggleAllDetailsExceptLocation}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 7.6"
                            version="1.1"
                            className="injected-svg cta-icon"
                          >
                            <path
                              fill="currentColor"
                              d="M0,3.8l4.2,3.8V0L0,3.8z M16,3.2H4.2v1.2H16V3.2z"
                            />
                          </svg>
                          <span className="cta-text page_header-back-text">
                            Back to overview
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                  {/* contact us  */}
                  {!this.state.showMaps && (
                    <div className="section__details-column">
                      <div className="section__details-column_title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 38.6 38.6"
                        >
                          <path d="M30.6,2.4V0h-3v2.4H11V0H8v2.4H0v13.1v23.2h26.4v0l12.2-12.2l0,0h0v-11V2.4H30.6z M26.4,34.3v-7.9h7.9L26.4,34.3z   M35.6,23.4H23.4v12.2H3V15.5h32.5V23.4z M35.6,12.4H3v-7H8v2.4h3V5.4h16.5v2.4h3V5.4h5V12.4z" />
                        </svg>
                        <span>CONTACT US</span>
                      </div>
                      <div className="section__details-column-inner">
                        <p>Bookings &amp; Enquiries</p>
                        <a href="tel:+61 2 91301566">+61 2 91301566</a>
                      </div>
                    </div>
                  )}

                  {/* walk-ins message */}
                  {!this.state.showMaps && (
                    <div className="section__details-column">
                      <div className="section__details-column_title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 55.3 43.7"
                        >
                          <g>
                            <rect y="40.7" width="55.3" height="3" />
                            <path d="M54.6,34.8c0-14.4-11.3-26.3-25.5-27.1V3h5.6V0H20.5v3h5.6v4.6C11.8,8.3,0.3,20.2,0.3,34.8v1.5h54.4V34.8z M3.3,33.3   c0.8-12.6,11.3-22.7,24.1-22.7s23.4,10,24.1,22.7H3.3z" />
                          </g>
                        </svg>
                        <span>WALK-INS WELCOME</span>
                      </div>
                      <div className="section__details-column-inner">
                        <p>
                          Whilst we do cater for walk-ins, reservations are
                          available for dinner from 6pm onwards and are
                          recommended for weekends and summertime. We take
                          reservations for lunch on Friday, Saturday and Sundays
                          from midday. Book &nbsp;
                          <a
                            onClick={this._handleShowModal}
                            style={{ textDecoration: "underline" }}
                          >
                            online
                          </a>{" "}
                          &nbsp;or please give us a call and one of our staff
                          will be more than happy to help you.
                        </p>
                      </div>
                    </div>
                  )}
                  {this.state.showMaps && (
                    <div className="section__details-location">
                      <div className="section__details-info">
                        <div className="section__details-info-inner">
                          <h4>Getting There</h4>
                          <div className="section__details-info-inner-content">
                            Located on the corner of Bondi Rd. and Denham St.,
                            there is plenty of street parking on Denham St. near
                            the main entrance of The Bottle Shop.
                            <br />
                            <br />
                            By Car By Public Transport
                            <br />
                            The closest station is Bondi Junction. Take the
                            train from Martin Place station to Bondi Junction.
                            From the station proceed to Stand A where you can
                            then catch the 380 bus to Bondi Rd. at Castle St.
                          </div>
                        </div>
                      </div>
                      <div className="section__details-map">
                        <GoogleMap />
                      </div>
                    </div>
                  )}
                  <div className="page_section-border font_title" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Index
