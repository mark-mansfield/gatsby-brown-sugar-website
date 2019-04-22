import React from "react"
import { TweenMax } from "gsap/all"
import { Transition } from "react-transition-group"
class Food extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      breakfast: true,
      brunch: false,
      lunch: false,
      dinner: false,
    }
  }

  showModal() {
    this.props.modalState()
  }

  clearComponents(ref) {
    console.log(ref)
    this.setState({
      breakfast: false,
      brunch: false,
      lunch: false,
      dinner: false,
    })
    this.toggleComponent(ref)
  }

  toggleComponent(ref) {
    if (ref === "breakfast") {
      this.setState({ breakfast: !this.state.breakfast })
    }
    if (ref === "brunch") {
      this.setState({ brunch: !this.state.brunch })
    }
    if (ref === "lunch") {
      this.setState({ lunch: !this.state.lunch })
    }

    if (ref === "dinner") {
      this.setState({ dinner: !this.state.dinner })
    }
  }

  render() {
    //   state prop refs
    const { breakfast } = this.state
    const { brunch } = this.state
    const { lunch } = this.state
    const { dinner } = this.state

    // parent is the controller
    // menu is divided up into Transition components to enable css transitions and GSAP alpha annimations
    // we toggle child state to load specific child component

    // parent
    return (
      <div
        className="spacer minViewPortHeight main-column-width spacer"
        role="navigation"
        aria-labelledby="menu__navigation"
      >
        <div className="menu__nav-bar" role="menu">
          {/* food menu nav */}
          <div className="flex-col">
            <h1>Our Menus</h1>
            <sub>Try &amp; discover</sub>
          </div>
          <div className="menu__nav-bar-wrap">
            <div id="food-menu">
              <ul
                className="menu__nav-bar menu__nav-bar-tabs"
                role="tablist"
                aria-controls="menuInfo"
              >
                <li>
                  <button
                    role="menuitem"
                    onClick={this.clearComponents.bind(this, "breakfast")}
                    className={
                      breakfast
                        ? "simple-button-sml highlight"
                        : "simple-button-sml "
                    }
                    disabled={breakfast}
                    aria-disabled={breakfast}
                  >
                    Breakfast
                  </button>
                </li>
                <li>
                  <button
                    role="menuitem"
                    onClick={this.clearComponents.bind(this, "brunch")}
                    className={
                      brunch
                        ? "simple-button-sml highlight "
                        : "simple-button-sml"
                    }
                    disabled={brunch}
                  >
                    Brunch
                  </button>
                </li>
                <li>
                  <button
                    role="menuitem"
                    onClick={this.clearComponents.bind(this, "lunch")}
                    className={
                      lunch
                        ? "highlight simple-button-sml"
                        : "simple-button-sml"
                    }
                    disabled={lunch}
                  >
                    Lunch
                  </button>
                </li>
                <li>
                  <button
                    role="menuitem"
                    onClick={this.clearComponents.bind(this, "dinner")}
                    className={
                      dinner
                        ? "highlight simple-button-sml"
                        : "simple-button-sml"
                    }
                    disabled={dinner}
                  >
                    Dinner
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section>
          {/* breakfast */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={breakfast}
            exit={false}
            appear={true}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                autoAlpha: breakfast ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/* breakfast data  */}
            <div id="breakfast" className="transition-card">
              <div className="flex-col menu-heading">
                <h2>Breakfast</h2>
                <sub>8:30am - 12pm</sub>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <p>
                    <strong>toast w spreads 7.5</strong>
                    <br />
                    rye sourdough, panini, gluten free or sprouted (add $1)
                    <br />w labne, vegemite, homemade jam or ricotta
                  </p>
                  <p>
                    <strong>add sides</strong>:<br /> extra egg, kasundi, zhoug,
                    piri piri 2<br />
                    hash browns, kale, mushrooms, avocado, halloumi, ricotta,
                    labne, olives 3.5
                    <br />
                    bacon, chorizo 4<br />
                    jamon serrano, smoked salmon 5
                  </p>
                  <p>
                    <strong>free range eggs 14</strong>
                    <br />
                    poached or scrambled w roasted tomatoes &amp; toast
                  </p>
                  <p>
                    <strong>basil &amp; feta scrambled eggs 18</strong>
                    <br />w toast, roasted tomato &amp; crispy bacon or smoked
                    salmon or mushrooms
                  </p>
                  <p>
                    <strong>corn &amp; zucchini waffle 18</strong>
                    <br />
                    avo salsa, rocket, herbs, jalapeño vinaigrette
                  </p>
                  <p>
                    <strong>
                      sourdough buttermilk pancakes &amp; maple 17
                    </strong>
                    <br />
                    banana, berries &amp; bacon or seasonal fruit &amp; compote,
                    greek yoghurt or ice cream
                  </p>
                </div>
                <div className="menu-column-right">
                  <p>
                    <strong>ancient grain porridge 17</strong>
                    <br />w rhubarb compote, apple, hazelnut, brown sugar or
                    honey
                  </p>
                  <p>
                    <strong>organic gluten free granola 16</strong>
                    <br />w roasted pear &amp; rhubarb compote, fresh seasonal
                    fruit, yoghurt &amp; bee pollen
                  </p>
                  <p>
                    <strong>chia, quinoa &amp; coconut bircher 18</strong>
                    <br />w figs, strawberries, grapes, pepitas, coconut,
                    almonds &amp; sesame seeds
                  </p>
                  <h4>
                    <span>KIDS BREAKY</span>
                  </h4>
                  <p>
                    <strong>single free range egg 6</strong>
                    <br />
                    fried, scrambled or poached served w toast
                  </p>
                  <p>
                    <strong>avo on turkish 6</strong>
                    <br />w fresh cucumber &amp; tomato
                  </p>
                  <p>
                    <strong>buttermilk pancake or waffle 6</strong>
                    <br />
                    plain w maple on the side
                    <br />
                    w banana &amp; bacon 8.5
                    <br />w fresh strawberries 8.5
                  </p>
                </div>
              </div>
              <button onClick={this.showModal.bind(this)}>BOOK A TABLE</button>
            </div>
          </Transition>

          {/* brunch */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={brunch}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: brunch ? 0 : 100,
                autoAlpha: brunch ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="transition-card">
              <div className="flex-col menu-heading">
                <h2>Brunch</h2>
                <sub>All day</sub>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <p>
                    <strong>brunch tabouli 18</strong>
                    <br />
                    quinoa, cauliflower, almonds, raw veggies, heaps of herbs,
                    preserved lemon, pomegranate &amp; tahini dressing
                  </p>
                  <p>
                    <strong>blt 15</strong>
                    <br />
                    crispy bacon, avo, tomato, cos, chilli aioli on toasted
                    focaccia
                    <br />
                    add fried egg 17
                  </p>
                  <p>
                    <strong>black stone eggs 18</strong>
                    <br />
                    english muffin w bacon, tomatoes, poached eggs, cheese &amp;
                    hash browns
                  </p>
                  <p>
                    <strong>veggie black stone 18</strong>
                    <br /> english muffin w mushrooms, tomatoes, poached eggs,
                    cheese &amp; hash browns
                  </p>
                  <p>
                    <strong>mojo eggs 18</strong>
                    <br />
                    poached eggs w romesco, shaved prosciutto, baby cavolo nero
                    &amp; mojo verde on sourdough
                  </p>
                </div>

                <div className="menu-column-right">
                  <p>
                    <strong>winter bowl 21</strong>
                    <br />
                    jap pumpkin, mushroom, asian grene, furikake rice, poached
                    eggs, miso dressing, toast
                  </p>
                  <p>
                    <strong>breakfast platter 22/40</strong>
                    <br />
                    seasonal vegetables, avocado, quinoa, almond &amp;
                    cauliflower tabouli, hash, eggs (poached or scrambled),
                    fermented cabbage, labne &amp; olives, tahini, zhoug &amp;
                    za’atar toast (vegan available)
                  </p>
                  <p>
                    <strong>moroccan eggs 18</strong>
                    <br />
                    slow cooked spiced capsicum &amp; tomatoes w poached egg,
                    tahini, zhoug &amp; za’atar toast
                    <br />
                    w goats cheese 21
                    <br />
                    w chorizo 22
                    <br />w both 24
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          {/* lunch */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={lunch}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: lunch ? 0 : 100,
                autoAlpha: lunch ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="flex-col transition-card">
              <div className="flex-col menu-heading">
                <h2>Lunch</h2>
                <sub>From 12pm</sub>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <p>
                    <strong>To Share</strong>
                  </p>
                  <p>bread, olives, labne 7.5</p>
                  <p>crispy herb potatoes 7.5</p>
                  <p>mixed leaf salad 7.5</p>
                  <h4>salads</h4>
                  <p>
                    <strong>halloumi salad 19</strong>
                    <br />
                    beetroot, farro, fresh pear, witlof, spinach, spiced
                    walnuts, merlot dressing
                  </p>
                  <p>
                    <strong>brown sugar salad 18</strong>
                    <br />
                    beetroot, crispy polenta, pumpkin, lentils, goats cheese,
                    rocket, salsa &amp; balsamic, dressing
                  </p>
                  <p>
                    <strong>green salad 19</strong>
                    <br />
                    cucumber,&nbsp;spinach, peas, broccolini, avo, fennel,
                    celery, pistachio dukkah, tahini, lemon dressing
                  </p>
                  <p>
                    <strong>
                      brunch tabouli with grilled za’atar lemon chicken 21.5
                    </strong>
                    <br />
                    quinoa, cauliflower, raw veggies, almonds, heaps of herbs,
                    preserved lemon, pomegranate &amp; tahini dressing
                  </p>
                  <p>
                    <strong>add</strong>
                    <br />
                    poached egg, toast 2<br /> halloumi 3.5
                    <br />
                    grilled za’atar lemon chicken 5<br />
                    flat iron steak, grilled &amp; sliced 10
                  </p>
                </div>
                <div className="menu-column-right">
                  <p>
                    <strong>South Australian mussels 19</strong>
                    <br />
                    chilli, tomato, chargrilled sourdough
                  </p>
                  <p>
                    <strong>spaghettini 22</strong>
                    <br />
                    roasted tomato &amp; basil sugo, buffalo mozzarella
                  </p>
                  <p>
                    <strong>angel hair pasta 33</strong>
                    <br />
                    crab, semi-dried tomato, chilli &amp; saffron
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>chicken burger 19</strong>
                    <br />
                    chilli mayo, cos lettuce, crispy potatoes &amp; homemade
                    pickles
                    <br />
                    add cheese and bacon 4
                  </p>
                  <p>
                    <strong>grilled chicken sandwich 19</strong>
                    <br />
                    avocado, aioli, homemade tomato relish, rocket &amp;
                    homemade pickles
                  </p>
                  <p>
                    <strong>grilled steak sandwich 19</strong>
                    <br />
                    beetroot, spanish onion, aioli, kasundi, rocket &amp;
                    homemade pickles
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>snapper 35</strong>
                    <br />
                    eggplant, roasted capsicum, okra, basil caper salsa
                  </p>
                  <p>
                    <strong>chargrilled flat iron steak 37</strong>
                    <br />
                    wild greens, slow roast tomatoes, crispy potatoes, porcini
                    butter
                  </p>
                  <p>
                    <strong>fish pie 37</strong>
                    <br />
                    leek, truffle oil &amp; mash
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          {/* dinner */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={dinner}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: dinner ? 0 : 100,
                autoAlpha: dinner ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="flex-col transition-card ">
              <div className="flex-col menu-heading">
                <h2>Dinner</h2>
                <sub>from 6pm</sub>
                <p>
                  <a
                    href="http://brownsugarbondi.com.au/wp-content/uploads/2019/03/bs-dinner-menu-180319.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Dinner Menu
                  </a>
                </p>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h4>ENTREE</h4>
                  <p>
                    <strong>roasted cauliflower</strong>, shawarma spices,
                    almonds, currants, sage brown butter 18
                  </p>
                  <p>
                    <strong>seared scallops</strong>, caviar lentils, speck,
                    tarragon, lettuce 23
                  </p>
                  <p>
                    <strong>roasted figs</strong>, stracciatella, pistachio,
                    bulgur, balsamic 20
                  </p>
                  <p>
                    <strong>South Australian mussels</strong>, chilli, tomato,
                    chargrilled sourdough 19
                  </p>
                  <p>
                    <strong>Spanish mackerel tataki</strong>, corn, cherry
                    tomato, nori crisp, anchoïade 21
                  </p>
                  <p>
                    <strong>crispy pork belly</strong>, boudin noir, parsnip,
                    apple, celery, jus 21
                  </p>
                  <p>
                    <strong>hand cut steak tartare</strong>, wild mushrooms,
                    yolk, potato gaufrette 21
                  </p>
                </div>
                <div className="menu-column-right">
                  <h4>SIDES</h4>
                  <p>pomme purée or crisp herb potatoes 9.5</p>
                  <p>wild greens, chilli, confit garlic, pepitas 12</p>
                  <p>
                    beetroot, radicchio, pear &amp; walnuts, merlot vinaigrette
                    12
                  </p>
                  <p>shaved cabbage, red apple, hazelnut, chives 12</p>
                  <p>
                    roasted carrots, baby onions, pistachio, sunflower sprouts
                    12
                  </p>
                </div>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <br />
                  <h4>MAIN</h4>
                  <br />
                  <p>
                    <strong>gold band snapper</strong>, eggplant, roasted
                    capsicum, okra, basil caper salsa 35
                  </p>
                  <p>
                    <strong>charred eggplant</strong>, crispy furikake rice,
                    green tea dashi, shimeji 28
                  </p>
                  <p>
                    <strong>squid ink pasta</strong>, spanner crab, semi-dried
                    tomato, chilli, saffron 33
                  </p>
                  <p>
                    <strong>fish pie</strong>, leeks, truffle oil 37
                  </p>
                  <p>
                    <strong>lamb rump</strong>, pistachio salsa verde,
                    chargrilled onion, pumpkin, jus 37
                  </p>
                  <p>
                    <strong>chargrilled flat iron steak</strong>, parsnip,
                    watercress, mushroom 38
                  </p>
                  <p>
                    <strong>chargrilled rib eye</strong>, shaved mushroom, chive
                    &amp; radish salad 13/100g
                    <br /> choice of: porcini butter, bordelaise sauce, lemon
                    olive oil
                  </p>
                </div>

                <div className="menu-column-right">
                  <br />
                  <h4>DESSERT</h4>
                  <br />
                  <p>mango sorbet, lime granita, papaya, coconut macaroon 14</p>
                  <p>
                    hazelnut chocolate fondant, salted butterscotch &amp;
                    vanilla ice cream 16
                  </p>
                  <p>
                    kaffir lime meringue, pineapple ginger sorbet, passion
                    fruit, Thai basil 15
                  </p>
                  <p>affogato, vanilla gelato, frangelico 14</p>
                  <p>sorbet or gelato 14</p>
                  <p>cheese plate, brown sugar oatcakes, fresh apple 16/24</p>
                </div>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    )
  }
}

export default Food
