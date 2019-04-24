import React from "react"
import { Link } from "gatsby"
import Scroll from "../Scroll"
const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt className="phone_number" />
        <dd> </dd>
        <dt>Address</dt>
        <dd>106 Curlewis Street &bull; Bondi Beach, &bull; NSW 2026</dd>
        <dt>Phone:</dt>
        <dt>
          <a
            href="tel:0291301566"
            id="callnowbutton"
            title="call now"
            aria-label="call us button"
          />
        </dt>
        <dd>(02) 9130 1566</dd>
        <dt>Email</dt>
        <dd>
          <Scroll type="id" element="contact">
            <button>Email us here</button>
          </Scroll>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/BondisBrownSugar"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/brownsugarbondi/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
