import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Waypoint from "react-waypoint"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import Nav from "../components/navigation/navigation"
import Food from "../components/menus/food/food"
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

        <Helmet>
          <style type="text/css">
            {`
              .highlight {
                background-color: #ff9900;
              }
            `}
          </style>
        </Helmet>
        <Header />
        <Nav sticky={this.state.stickyNav} />
        <Waypoint
          scrollableAncestor={window}
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <div id="main" className="main">
          <Food />

          <section id="drinks" className=" minViewPortHeight">
            <div className="spacer">
              <h1>Drinks</h1>
              <sub>Try &amp; discover</sub>
              <div className="menu-wrap">
                <div className="menu-nav-bar" id="drinks-menu">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="general"
                        aria-controls="general drink list"
                        aria-expanded="false"
                      >
                        cocktails / beers / ciders / hard
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="wine_by_the_glass"
                        aria-controls="wines by the glass"
                        aria-expanded="false"
                      >
                        wine by the glass
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="wine_by_the_bottle"
                        aria-controls="wines by the bottle"
                        aria-expanded="false"
                      >
                        wines by the bottle
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="digestifs"
                        aria-controls="digetsif drinks"
                        aria-expanded="false"
                      >
                        digestifs
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="general_list" className="flex-col visible">
              <div className="flex-col menu-heading">
                <h2>Cocktails / Beers / Ciders / Hard</h2>
                <sub>from 6pm</sub>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>COCKTAILS 17</h3>
                  <p>
                    <strong>kombucha margarita</strong>
                    <br />
                    tequila, cointreau, lime, honey, kombucha
                  </p>
                  <p>
                    <strong>bee’s knees</strong>
                    <br />
                    gin, homemade lemonade, honey, thyme, soda
                  </p>
                  <p>
                    <strong>berry breeze</strong>
                    <br />
                    vodka, mixed berries, lime, ginger beer
                  </p>
                  <p>
                    <strong>espresso martini</strong>
                    <br />
                    vodka, kahlua, coffee
                  </p>
                  <p>
                    <b>passionfruit caprioska</b>
                    <br />
                    vodka, passionfruit, lime &amp; soda
                  </p>
                  <p>
                    <strong>negroni</strong>
                    <br />
                    campari, gin, sweet vermouth, orange zest
                  </p>
                  <p>
                    <strong>aperol spritz</strong>
                    <br />
                    aperol, prosecco, dash of soda
                  </p>
                  <p>
                    <strong>Brown Sugar old fashioned</strong>
                    <br />
                    bourbon, bitters, cherry, soda, citrus
                  </p>
                  <p>
                    <strong>passion arrabbiata</strong>
                    <br />
                    tequila, passionfruit, chilli, lime
                  </p>
                  <h3>SOFT 6</h3>
                  <p>
                    sparkling mineral water
                    <br />
                    lemonade
                    <br />
                    passionfruit soda
                    <br />
                    ginger beer
                    <br />
                    pink grapefruit &amp; rosemary
                    <br />
                    lemon lime bitters
                  </p>
                </div>
                <div className="menu-column-right">
                  <h3>BREWED</h3>
                  <p>
                    cascade premium light, tas 7<br />
                    lord nelson pale ale, nsw 10
                    <br />
                    peroni nastro azzurro, ITA 10
                    <br />
                    balter pilsner, qld 10
                    <br />
                    stone &amp; wood pacific ale, nsw 10
                    <br />
                    bondi xpa, nsw 10
                  </p>
                  <h3>cider</h3>
                  <p>fils de pomme, apple or pear cider,&nbsp; fra 10</p>
                  <h3>HARD</h3>
                  <p>
                    pimm’s 12
                    <br />
                    aperol
                    <br />
                    ricard
                    <br />
                    pernod
                    <br />
                    campari
                    <br />
                    wyborowa vodka
                    <br />
                    bombay sapphire gin
                    <br />
                    hendricks gin
                    <br />
                    jose cuervo especial reposado&nbsp;tequila
                    <br />
                    bacardi superior white rum
                    <br />
                    appleton estate dark rum
                    <br />
                    johnnie walker black label
                    <br />
                    belvedere vodka 14
                  </p>
                </div>
              </div>
            </div>
            <div id="wine_by_the_glass" className="flex-col visible">
              <div className="flex-col menu-heading">
                <h2>Wine by the glass</h2>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>SPARKLING</h3>
                  <p>
                    <b>prosecco </b>(organic)
                    <br />
                    nv, ponte, treviso, ita 12
                  </p>
                  <h3>WHITE</h3>
                  <p>
                    <b>pinot gris</b>
                    <br />
                    2016 kuku, marlborough, nz 12
                  </p>
                  <p>
                    <strong>sauvignon blanc</strong>
                    <br />
                    2017 scorpius, marlborough , nz 11
                  </p>
                  <p>
                    <strong>chardonnay</strong>
                    <br />
                    2017 howard park, margaret river, wa 13
                  </p>
                </div>
              </div>
              <div className="menu-column-right">
                <h3>pink</h3>
                <p>
                  <strong>rosé</strong>
                  <br />
                  2017 villa aix, provence, fra 12
                </p>
                <h3>RED</h3>
                <p>
                  <b>pinot noir</b>
                  <br />
                  2017 robert dolan, yarra valley, vic 13
                </p>
                <p>
                  <b>granache blend</b>
                  <br />
                  2014 rag de raim, terra alta, spa 12
                </p>
                <p>
                  <strong>cabernet sauvignon</strong>
                  <br />
                  2014 heartland spice trader, langhorne creek, sa 12
                </p>
              </div>
            </div>

            {/* wine by the bottle */}
            <div id="wine_by_the_bottle" className="flex-col visible">
              <div className="flex-col menu-heading">
                <h2>Wine by the bottle</h2>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>sparkling</h3>
                  <p>
                    <strong>prosecco</strong> (organic)
                    <br />
                    nv, ponte, treviso, ita 48
                  </p>
                  <p>
                    <strong>champagne</strong>
                    <br />
                    nv laurent perrier, champagne brut, fra 110
                  </p>
                  <h3>white</h3>
                  <p>
                    <b>sauvignon blanc</b>
                    <br />
                    2017 scorpius, marlborough, nz 38
                  </p>
                  <p>
                    <strong>pinot grigio</strong>
                    <br />
                    2017 velante, venezia, ita 47
                  </p>
                  <p>
                    <strong>pinot gris</strong>
                    <br />
                    2016 kuku, marlborough, nz 42
                  </p>
                  <p>
                    <strong>chardonnay</strong>
                    <br />
                    2017 robert oatley, margaret river, wa 56
                  </p>
                  <p>2016 greystone, waipara valley, nz 100</p>
                  <p>
                    <strong>riesling</strong>
                    <br />
                    2016 good catholic girl, clare valley, sa 55
                  </p>
                  <h3>Rosé</h3>
                  <p>2017 villa aix, provence, fra 56</p>
                </div>
              </div>
              <div className="menu-column-right">
                <h3>red</h3>
                <p>
                  <b />
                </p>
                <p>
                  <b>pinot noir</b>
                  <br />
                  2017 robert dolan, yarra valley, vic 44
                </p>
                <p>2017 bannockburn, central otago, nz 60</p>
                <p>
                  <strong>tempranillo</strong>
                  <br />
                  2016 piggs peak ‘pressed ham’, hunter valley,&nbsp;nsw 49
                </p>
                <p>
                  <b>chianti</b>
                  <br />
                  2015 guicciardini, tuscany, ita 55
                </p>
                <p>
                  <b>granache blend</b>
                  <br />
                  2014 rag de raim, terr alta, spa 41
                </p>
                <p>
                  <b>barbera d’alba</b>
                  <br />
                  2015 bricco miaolica, alba, ita 60
                </p>
                <p>
                  <b>malbec</b>
                  <br />
                  2016 rio mendoza, mendoza, arg 46
                </p>
                <p>
                  <b>grenache, mataro, shiraz</b>
                  <br />
                  2014 rockford ‘moppa’, barossa, sa 83
                </p>
                <p>
                  <b>syrah</b>
                  <br />
                  2017 ekleipsis, north canterbury, nsw 90
                </p>
                <p>
                  <b>shiraz </b>
                  <br />
                  2018 yangarra, mclaren vale, sa 58 (preservative free)
                  <br />
                  2015 rockford ‘basket press’, barossa, sa 150
                </p>
                <p>
                  <b>cabernet sauvignon</b>
                  <br />
                  2014 heartland ‘spice trader’, langhorne creek, sa 39
                  <br />
                  2015 majella, coonawarra, sa 70
                </p>
              </div>
            </div>

            {/* digestifs */}
            <div id="digestifs" className="flex-col visible">
              <div className="flex-col menu-heading">
                <h2>Digestifs</h2>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>
                    <strong>STICKY</strong>
                  </h3>
                  <p>
                    <strong>uroulat</strong>
                    <br />
                    2015 charles hours clos, jurançon, france 12/48
                  </p>
                  <p>
                    <strong>verdelho</strong>
                    <br />
                    2016 piggs peake ‘swines only’, mudgee, nsw 12
                  </p>
                  <h3>fortified</h3>
                  <p>
                    <strong>muscat</strong>
                    <br />
                    dutschke, barossa, sa 10/35
                  </p>
                  <p>
                    <strong>shiraz</strong>
                    <br />
                    2017 piggs peake ‘suckling pig’, hunter valley, nsw 12/46
                  </p>
                  <p>
                    <strong>pedro ximenex</strong>
                    <br />
                    nv valdespino, jerez, spa 9
                  </p>
                  <p>
                    <strong>grand tawny port</strong>
                    <br />
                    mcwilliam’s, hanwood, nsw 8
                  </p>
                </div>
              </div>
              <div className="menu-column-right">
                <h3>malt &amp; premium blends</h3>
                <p>
                  glenmorangie 12
                  <br />
                  talisker 10 y/o
                  <br />
                  johnnie walker black label
                  <br />
                  woodford reserve bourbon
                </p>
                <h3>afters</h3>
                <p>
                  frangelico 12
                  <br />
                  disaronno&nbsp;amaretto
                  <br />
                  cointreau
                  <br />
                  averna
                  <br />
                  limoncello
                  <br />
                  kahlua
                  <br />
                  ron zacapa centenario 23y/o rum
                  <br />
                  frapin vsop cognac
                  <br />
                  antipodes organic espresso liqueur
                </p>
              </div>
            </div>
          </section>

          <section id="gallery" className=" minViewPortHeight">
            <header className="spacer">
              <h2>Gallery</h2>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

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
        </div>
      </Layout>
    )
  }
}

export default Index
