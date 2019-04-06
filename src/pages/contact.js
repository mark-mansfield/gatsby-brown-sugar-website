import React from "react"
import Layout from "../components/layout/layout.js"
import MapImage from "../images/map.png"
const Contact = () => {
  return (
    <div>
      <Layout>
        <img src={MapImage} title="our location" style={{ width: "100vw" }} />
        <h1>Contact Us</h1>
        <p>
          Located in the heart of Bondi, a short stroll from the iconic Bondi
          Beach. 106 Curlewis Street, Bondi Beach NSW 2026 We are open for
          dinner Tuesday through Sunday nights from 6pm till late, and Friday
          through Sunday for breakfast and lunch, 8:30am – 2:30pm. p 02 9130
          1566
        </p>
        [CONTACT FORM COMPONENT]
        <h1>Gift Cards</h1>
        <p>
          Brown Sugar’s gift vouchers are the perfect way to give a local Bondi
          dining experience to someone special. They are valid for 12 months
          from the date of purchase. You can choose to have your gift voucher
          posted or sent electronically to you or directly to the recipient.
          Alternatively, vouchers can be collected from the restaurant Tuesday
          to Thursday from 3pm or Friday to Sunday from 8.30am. Please fill in
          the form and a member of our team will be in contact to process and
          confirm your purchase.
        </p>
        [CONTACT FORM COMPONENT]
      </Layout>
    </div>
  )
}
export default Contact
