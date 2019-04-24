import React from "react"
import Hamburger from "../navigation/hamburgerButton"
import logo from "../../images/logo.v1.svg"
class Header extends React.Component {
  render() {
    return (
      <header className="main__header">
        <div
          id="main__header-top-bar"
          className={
            this.props.sticky
              ? "main__header-top-bar alt"
              : "main__header-top-bar"
          }
        >
          <div className="main__header-left-part">
            {/* <button
              className="main__header-hamburger-button simple-button flex-row space-evenly"
              onClick={this.props.sideDrawerState("left", true)}
            >
              <span className="header-menu-burger">
                <span className="header-menu-burger-bun header-menu-burger-bun--top" />
                <span className="header-menu-burger-meat" />
                <span className="header-menu-burger-bun header-menu-burger-bun--bottom" />
              </span>
              <div>
                <span className="smaller-text">MENU</span>
              </div>
            </button> */}
            <Hamburger
              className="main__nav-hamburger-button  hamburger-button simple-button flex-row space-evenly"
              sideDrawerState={this.props.sideDrawerState}
            />
            <div className="main__header-branding">
              <img className="main__header-logo" src={logo} alt="logo" />
            </div>
          </div>
          <div className="main__header-mid-part" />
          <div className="main_header-right-part">
            <div className="main__header-utilities-wrapper">
              <div className="header-utilities">
                <div className="header-utilities-cell--gift-card">
                  <button
                    className="button gift-card-button"
                    onClick={this.props.giftCardModalState.bind(this)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 15"
                      className="header-utilities-trigger-icon"
                    >
                      <path
                        fill="currentColor"
                        d="M14.2,3.2h-1.7c0.1-0.2,0.1-0.5,0.1-0.8c0-1.3-1.1-2.4-2.4-2.4c-0.8,0-1.5,0.4-2,1.1L7.9,1.6  L7.5,1.1C7.1,0.4,6.4,0,5.5,0C4.2,0,3.2,1.1,3.2,2.4c0,0.3,0.1,0.5,0.1,0.8H1.6C0.7,3.2,0,3.9,0,4.7l0,8.7C0,14.3,0.7,15,1.6,15  h12.6c0.9,0,1.6-0.7,1.6-1.6V4.7C15.8,3.9,15.1,3.2,14.2,3.2z M10.3,1.6c0.4,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8S9.5,2.8,9.5,2.4  S9.8,1.6,10.3,1.6z M5.5,1.6c0.4,0,0.8,0.4,0.8,0.8S6,3.2,5.5,3.2c-0.4,0-0.8-0.4-0.8-0.8S5.1,1.6,5.5,1.6z M14.2,13.4H1.6v-1.6  h12.6V13.4z M14.2,9.5H1.6V4.7h4L3.9,7l1.3,0.9l1.9-2.6l0.8-1.1l0.8,1.1l1.9,2.6L11.8,7l-1.6-2.2h4V9.5z"
                      />
                    </svg>
                    <span> GIFT CARDS</span>
                  </button>
                </div>
                <div className="header-utilities-cell--book">
                  <button
                    className="button-inverted"
                    onClick={this.props.modalState.bind(this)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15.6"
                      className="header-utilities-trigger-icon header-book-icon"
                    >
                      <path
                        fill="currentColor"
                        d="M4.7,7H3.1v1.6h1.6V7z M7.8,7H6.2v1.6h1.6V7z M10.9,7H9.3v1.6h1.6V7z M12.4,1.6h-0.8V0h-1.6v1.6H3.9V0H2.3v1.6  H1.6C0.7,1.6,0,2.3,0,3.1L0,14c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V3.1C14,2.3,13.3,1.6,12.4,1.6z M12.4,14H1.6V5.4  h10.9V14z"
                      />
                    </svg>
                    <span>BOOK NOW</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div style={{ height: "100%" }}>
            <div className="hero--venu-banner">
              <div
                className="hero--venu-banner-image"
                id="hero--venu-banner-image"
              >
                <svg
                  width="336px"
                  height="176px"
                  viewBox="0 0 336 176"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,6.39030725 C45.8409616,0.702143985 77.6641172,-1.18864303 95.4694668,0.717946212 C110.795592,2.35906119 129.225254,7.67761819 145.531645,17.2749392 C148.169441,18.8274457 156.615461,25.2460236 150.870107,33.9596502 C147.03987,39.7687346 138.643855,48.6977102 125.682062,60.746577 L167,86.6707688 C158.99489,104.680276 147.623983,118.974017 132.88728,129.55199 C118.150576,140.129964 89.8441779,153.945967 47.9680851,171 C29.2781169,134.666648 17.232312,107.231699 11.8306703,88.6951536 C6.42902864,70.1586085 2.48547187,42.7236597 0,6.39030725 Z"
                    id="Rectangle"
                    fill="#FFF3BF"
                  />
                  <path
                    d="M160.030827,58.0283227 C164.225692,50.7027412 169.095873,45.2900589 174.641369,41.7902759 C191.316159,31.2667546 217.763091,22.1216689 229.92364,18.6168253 C241.910516,15.1620365 261.562434,10.6785689 282.988727,10.0586672 C288.896762,9.887737 299.483956,10.0356829 310.461354,11.2433625 C312.353906,11.4515717 314.647419,11.9334607 317.341895,12.6890293 C319.190577,14.3559204 320.114918,16.3491315 320.114918,18.6686629 C319.457454,19.1223271 306.718893,26.663748 297.973264,36.2003304 C289.174258,45.7951169 284.370194,57.3859627 284.475371,58.0283227 C285.125043,61.9961599 284.393975,63.3287795 286.981138,68.7000734 C287.660814,70.1111715 289.145901,75.8085797 296.259057,82.0653814 C301.362119,86.5540848 328.269727,105.027435 334.349893,122.747157 C335.449964,125.953147 336,129.512408 336,133.424941 C335.029496,135.520913 334.087956,136.999026 333.175378,137.859279 C329.947038,140.902517 325.663293,142.967768 323.418694,144.210056 C303.672921,155.13848 283.942787,160.380563 268.614032,164.355277 C255.654509,167.715654 231.537767,173.956072 208.657916,175.737128 C201.488582,176.295216 192.010391,175.964672 180.223344,174.745494 C178.106615,174.335519 176.647104,173.185026 175.84481,171.294014 C175.042516,169.403002 175.348365,165.994499 176.762358,161.068507 C179.342712,153.409938 182.21218,147.415357 185.370761,143.084764 C188.529342,138.754171 194.786473,133.138288 204.142153,126.237114 C197.718472,115.948583 193.046197,108.638574 190.125329,104.307087 C183.626126,94.6691273 177.777705,86.4957334 174.641369,82.0653814 C173.464838,80.4034283 171.717413,77.6006563 170.632141,76.1295645 C167.333808,71.6586559 164.45886,68.777613 162.586105,66.0417656 C160.673802,63.2481419 159.822042,60.5769942 160.030827,58.0283227 Z"
                    id="Rectangle"
                    fill="#FFF3BF"
                  />
                  <path
                    d="M199,119 L332.898569,119 C332.901792,119.024858 333.125635,119.48208 333.501922,120.5 C333.600844,120.7676 333.76687,121.2676 334,122 L200.692648,122 L199,119 Z"
                    id="Rectangle-Copy"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M319.399532,102.03333 C319.402654,102.057233 319.881576,102.505971 320.723542,103.458473 C320.967088,103.733993 321.392574,104.247835 322,105 L189.713077,105 C188.715573,103.341145 188.144666,102.412366 188.000355,102.213664 C187.856045,102.014962 231.65577,101.954851 319.399532,102.03333 Z"
                    id="Rectangle-Copy"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M23,118 L146,118 C146.004142,118.034781 145.113761,119.002218 143.328855,120.902311 L24.1788761,121 L23,118 Z"
                    id="Rectangle-Copy"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M16,101.37637 C16,100.874543 63.666655,100.874543 158.999965,101.37637 C159.004033,101.400278 158.653911,101.942848 157.89344,102.956277 C157.738178,103.163183 157.48674,103.511091 157.139124,104 L17.0288627,104 C16.3429542,102.415129 16,101.540586 16,101.37637 Z"
                    id="Rectangle-Copy"
                    fill="#FFFFFF"
                  />
                  <circle id="Oval" fill="#FFFFFF" cx="62" cy="41" r="8" />
                  <circle id="Oval" fill="#FFFFFF" cx="83" cy="103" r="8" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <h1 className="hero-heading f-h1 f-inverted">
              <span className="hero-title"> </span>
            </h1>
            <h4 className="hero-subtitle f-h4"> </h4>
            <div className="hero-cta" />
          </div>
        </div>

        {/* sticky get shown on mobile devices */}
        <div className="page_cta page_cta--sticky page_cta--dark_scheme">
          <button
            className="button-inverted"
            onClick={this.props.modalState.bind(this)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15.6"
              className="header-utilities-trigger-icon header-book-icon"
            >
              <path
                fill="currentColor"
                d="M4.7,7H3.1v1.6h1.6V7z M7.8,7H6.2v1.6h1.6V7z M10.9,7H9.3v1.6h1.6V7z M12.4,1.6h-0.8V0h-1.6v1.6H3.9V0H2.3v1.6  H1.6C0.7,1.6,0,2.3,0,3.1L0,14c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V3.1C14,2.3,13.3,1.6,12.4,1.6z M12.4,14H1.6V5.4  h10.9V14z"
              />
            </svg>
            <span>BOOK NOW</span>
          </button>
        </div>
      </header>
    )
  }
}

export default Header
// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// }
// export default withStyles(drawStyles)(Header)
