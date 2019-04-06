import React from "react"
import Layout from "../components/layout/layout"
import Link from "gatsby-link"
const Groups = () => {
  return (
    <div>
      <Layout>
        <h1>Group Bookings</h1>
        <p>
          For bookings of 10 or more guests we offer a special customized set
          menu, with a selection of up to four options for entree, main and/or
          dessert of your choice to cater for all of your dietary requirements.
          A perfect way to celebrate birthdays, anniversaries, Christmas parties
          and more, we’re happy to cater for every event.
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
        <h1>Private Functions</h1>
        <p>
          Our venue is available for hire for exclusive use both inside and
          outside of our normal trading hours. Prices and times are flexible, so
          please don’t hesitate to call or email our team. We can cater for up
          to 45 guests inside and 16 outside and are more than happy to
          personalise a food and beverage package to your requirements.
        </p>
        <p>
          Please <Link to="/contact">email us</Link> for more details.
        </p>
      </Layout>
    </div>
  )
}

export default Groups
