import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Waypoint from "react-waypoint"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import StickyNav from "../components/navigation/StickyNav"
import Food from "../components/menus/food/food"
import Drinks from "../components/menus/drinks/drinks"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Brown Sugar - dev site" />
        <Header />
        <StickyNav sticky={this.state.stickyNav} />
        <Waypoint
          scrollableAncestor={window}
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <main id="main" className="main">
          <Food />
          <Drinks />

          <section id="groups" className=" minViewPortHeight">
            <header className="spacer">
              <h1>Group Bookings</h1>
            </header>
            <p>
              For bookings of 10 or more guests we offer a special customized
              set menu, with a selection of up to four options for entree, main
              and/or dessert of your choice to cater for all of your dietary
              requirements. A perfect way to celebrate birthdays, anniversaries,
              Christmas parties and more, we’re happy to cater for every event.
            </p>
            <p>
              <a
                href="http://brownsugarbondi.com.au/wp-content/uploads/2019/03/group-reservations-mar-2019.pdf"
                target="_self"
                rel="noopener noreferrer"
              >
                Please click here for all group booking details.
              </a>
            </p>
            <header className="spacer">
              <h1>Private Functions</h1>
            </header>
            <p>
              Our venue is available for hire for exclusive use both inside and
              outside of our normal trading hours. Prices and times are
              flexible, so please don’t hesitate to call or email our team. We
              can cater for up to 45 guests inside and 16 outside and are more
              than happy to personalise a food and beverage package to your
              requirements.
            </p>
            <p>
              Please <Link to="/contact">email us</Link> for more details.
            </p>
          </section>

          <section id="reservations" className=" minViewPortHeight">
            <header className="spacer">
              <h1>Reservations</h1>
            </header>
            <p>
              Whilst we do cater for walk-ins, reservations are available for
              dinner from 6pm onwards and are recommended for weekends and
              summertime. We take reservations for lunch on Friday, Saturday and
              Sundays from midday. Book online via the reservations tab or
              please don’t hesitate to give us a call and one of our staff will
              be more than happy to help you.
            </p>
          </section>

          <section id="contact" className="minViewPortHeight">
            <header className="spacer">
              <h1>Contact Us</h1>
            </header>
            <p>
              Located in the heart of Bondi, a short stroll from the iconic
              Bondi Beach. 106 Curlewis Street, Bondi Beach NSW 2026 We are open
              for dinner Tuesday through Sunday nights from 6pm till late, and
              Friday through Sunday for breakfast and lunch, 8:30am – 2:30pm. p
              02 9130 1566
            </p>
            [CONTACT FORM COMPONENT]
            <header className="spacer">
              <h1>Gift Cards</h1>
            </header>
            <p>
              Brown Sugar’s gift vouchers are the perfect way to give a local
              Bondi dining experience to someone special. They are valid for 12
              months from the date of purchase. You can choose to have your gift
              voucher posted or sent electronically to you or directly to the
              recipient. Alternatively, vouchers can be collected from the
              restaurant Tuesday to Thursday from 3pm or Friday to Sunday from
              8.30am. Please fill in the form and a member of our team will be
              in contact to process and confirm your purchase.
            </p>
            [CONTACT FORM COMPONENT]
          </section>
        </main>
      </Layout>
    )
  }
}

export default Index
