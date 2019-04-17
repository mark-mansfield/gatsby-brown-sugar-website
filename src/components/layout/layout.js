import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Scroll from "../Scroll"
/* eslint-disable import/first */
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import Footer from "../footer/footer"

const drawStyles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "is-loading",
      left: false,
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    // drawer set up
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <Scroll type="id" element="menu__navigation">
            <ListItem button key="menu">
              <ListItemText primary="Menu" />
            </ListItem>
          </Scroll>
        </List>
        <Divider />
        <List>
          <ListItem>
            <div className="phone_number">PH: (02) 9130 1566</div>
            <a href="tel:0291301566" id="call_now_button" />
          </ListItem>
        </List>

        <List>
          {[
            "106 Curlewis St, Bondi Beach NSW 2026",
            "Dinner tuesday - Sunday",
            "Breakfast - Firday to Sunday",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
    return (
      <div className={`body ${this.state.loading}`}>
        <div
          className="hamburger_nav"
          style={{
            top: "0",
            left: "0",
            zIndex: "1001",
          }}
        >
          <MenuIcon
            className="menu-icon"
            onClick={this.toggleDrawer("left", true)}
          />
        </div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
        <div id="wrapper">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}
Template.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(drawStyles)(Template)
