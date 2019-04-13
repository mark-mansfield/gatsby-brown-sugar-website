import React from "react"
import Helmet from "react-helmet"
import Waypoint from "react-waypoint"
import Modal from "react-modal"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import StickyNav from "../components/navigation/StickyNav"
import Food from "../components/menus/food/food"
import Drinks from "../components/menus/drinks/drinks"
import ContactForm from "../components/contact/contact"
import Reservation from "../components/reservation/reservation"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import "../styles/accordion.css"

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
        <Helmet title="Brown Sugar - dev site" />

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

        <StickyNav sticky={this.state.stickyNav} />

        <Waypoint
          scrollableAncestor={window}
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <main id="main" className="main">
          {/* because this component uses cssTransition group
          pass in a reference to the modal state so we can launch a modal
          from within this component */}
          <section id="menu__navigation">
            <Food modalState={this._handleShowModal.bind(this)} />
          </section>

          {/* because this component uses cssTransition group */}
          <Drinks />

          <section id="groups" className=" minViewPortHeight">
            <div className="spacer">
              <h1>Group Bookings</h1>
            </div>
            <h3>Group Reservations for 10-48 guests</h3>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <br />

              <div style={{ width: "50%" }}>
                <p>
                  For bookings of 10 or more guests we offer a special, with a
                  selection of up to four options for entree, main and/or
                  dessert of your choice to cater for all of your dietary
                  requirements.
                </p>
                <p>
                  A perfect way to celebrate birthdays, anniversaries, Christmas
                  parties and more, we’re happy to cater for every event.
                </p>
                <p>
                  For groups of 10 and above we offer a reduced menu (designed
                  by you). Your guests choose on the night, from a small menu
                  that you’ve selected.
                </p>
                <p>
                  The following options are available :
                  <br />
                  <br />
                  <strong>2 course menu:</strong> Includes 4 entrees and 4
                  mains, coffee or tea and petit fours. $60 per head
                  <br />
                  <br />
                  <strong>3 course menu:</strong> Includes 4 entrees, 4 mains
                  and 4 desserts, coffee or tea and petit fours. $70 per head
                </p>
              </div>

              <div />
            </div>
            <h3>Here is what you can choose from </h3>
            <BrowserView>
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>ENTREE</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Roasted cauliflower, shawarma spices, almonds, currants,
                      sage brown butter
                    </p>
                    <p>
                      Seared scallops, caviar lentils, speck, tarragon and
                      lettuce Roasted figs,
                    </p>
                    <p>
                      stracciatella, pistachio, bulgur, balsamic South
                      Australian mussels, chilli, tomato, chargrilled sourdough
                    </p>
                    <p>
                      Spanish mackerel tataki, corn, cherry tomato, nori crisp,
                      anchoïade
                    </p>
                    <p>
                      Crispy pork belly, boudin noir, parsnip, apple, celery,
                      jus
                    </p>
                    <p>
                      Hand cut steak tartare, wild mushrooms, yolk, potato
                      gaufrette
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>MAIN</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Gold band Snapper, eggplant, roasted capsicum, okra, basil
                      caper salsa
                    </p>
                    <p>
                      Charred eggplant, crispy furikake rice, green tea dashi,
                      shimeji
                    </p>
                    <p>
                      Squid ink pasta, spanner crab, semi-dried tomato, chilli,
                      saffron
                    </p>
                    <p> Fish pie, leeks, truffle oil</p>
                    <p>
                      Lamb rump, pistachio salsa verde, chargrilled onion,
                      pumpkin, jus
                    </p>
                    <p>
                      Chargrilled flat iron steak, parsnip, watercress, mushroom
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>SIDES</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Pomme puree, crisp herb potatoes 9.5 </p>
                    <p>Wild greens, chilli, confit garlic, pepitas 12 </p>
                    <p>
                      Beetroot, radicchio, pear &amp; walnuts, merlot
                      vinaigrette 12
                    </p>
                    <p>Shaved cabbage, red apple, hazelnut, chives 12 </p>
                    <p>
                      Roasted carrots, baby onions, pistachio,sunflower sprouts
                      12
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>DESERT</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Kaffir lime meringue, pineapple ginger sorbet, passion
                      fruit, Thai basil Pain d’epice
                    </p>
                    <p>creme brûlée, rhubarb, strawberry sorbet</p>
                    <p>
                      Hazelnut chocolate fondant, salted butterscotch &amp;
                      vanilla gelato
                    </p>
                    <p>
                      Affogato, vanilla gelato, frangelico Sorbet or gelato{" "}
                    </p>
                    <p>Cheese plate, brown sugar oatcakes, fresh apple</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </BrowserView>

            <MobileView>Mobile view custom menu content</MobileView>

            <h3>Beverages </h3>
            <div style={{ width: "50%" }}>
              <p>
                All beverages will be charged on consumption. <br />
                We’re not BYO wine for groups of 10 or more. Our complete wine
                list is available upon request.
              </p>

              <h3>Menu Selection</h3>
              <p>
                Please select your entrees, mains and desserts from our current
                dinner menu (see page 2) and send to
                info@brownsugarbondi.com.au, 72 hours prior to your booking.
                Please contact us directly to discuss any specific dietary
                requirements. Sides are not included &amp; may be ordered in
                addition to your menu selection.
              </p>

              <h3>Service Charge</h3>
              <p>
                A discretionary 8% service fee is applied to the final bill for
                parties of 10 or more.
              </p>

              <h3>Birthday cakes</h3>
              <p>
                If you would like to bring your own cake, cakeage is $5/per
                person. Your cake will be garnished with fresh fruit and
                home-made ice-cream. If you would like us to bake your cake,
                please place your order at least 48 hours prior to your
                function. Our complete cake and ice-cream cake selection is
                available upon request.
              </p>

              <h3>Final numbers &amp; cancellation policy Credit</h3>
              <p>
                card details are required at time of booking to secure your
                reservation. Please confirm your final numbers, 24 hours hours
                prior your booking. Any spaces that are not filled due to to no
                shows on the evening will be charged at 75% of the set menu
                price. We will notify you of any cancellation fees applied.
              </p>

              {/* <p>
              <a
                href="http://brownsugarbondi.com.au/wp-content/uploads/2019/03/group-reservations-mar-2019.pdf"
                target="_new"
                rel="noopener noreferrer"
              >
                Please click here for all group booking details.
              </a>
            </p> */}

              <h3>Private Functions</h3>

              <p>
                Our venue is available for hire for exclusive use both inside
                and outside of our normal trading hours. Prices and times are
                flexible, so please don’t hesitate to call or email our team. We
                can cater for up to 45 guests inside and 16 outside and are more
                than happy to personalize a food and beverage package to your
                requirements.
              </p>
            </div>
          </section>

          <section id="reservations" className=" minViewPortHeight">
            <h1>Reservations</h1>
            <div style={{ width: "50%" }}>
              <p>
                Whilst we do cater for walk-ins, reservations are available for
                dinner from 6pm onwards and are recommended for weekends and
                summertime. We take reservations for lunch on Friday, Saturday
                and Sundays from midday. Please don’t hesitate to give us a call
                and one of our staff will be more than happy to help you.
              </p>
            </div>
          </section>

          <section id="contact" className="minViewPortHeight">
            <h1>Contact Us</h1>
            <div style={{ width: "50%" }}>
              <p>
                Located in the heart of Bondi, a short stroll from the iconic
                Bondi Beach. 106 Curlewis Street, Bondi Beach NSW 2026 We are
                open for dinner Tuesday through Sunday nights from 6pm till
                late, and Friday through Sunday for breakfast and lunch, 8:30am
                – 2:30pm. p 02 9130 1566
              </p>
              <ContactForm />

              <h3>Gift Cards</h3>

              <p>
                Brown Sugar’s gift vouchers are the perfect way to give a local
                Bondi dining experience to someone special. They are valid for
                12 months from the date of purchase. You can choose to have your
                gift voucher posted or sent electronically to you or directly to
                the recipient. Alternatively, vouchers can be collected from the
                restaurant Tuesday to Thursday from 3pm or Friday to Sunday from
                8.30am. Please fill in the form and a member of our team will be
                in contact to process and confirm your purchase.
              </p>
              <ContactForm />
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default Index
