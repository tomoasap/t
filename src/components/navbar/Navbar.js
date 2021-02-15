import React, { Component } from "react"
import { navigate } from "@reach/router"
import logo from "../../images/cloud-logo.svg"
import logoSmall from "../../images/cloud-logo-small.svg"
import MenuIcon from "mdi-react/MenuIcon"
import "./navigation.css"

class Navbar extends Component {
  state = {
    smallScreen: false,
    scrolling: false,
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
    window.addEventListener("scroll", this.handleScroll)
  }
  resize() {
    this.setState({ smallScreen: window.innerWidth <= 860 })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = event => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false })
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true })
    }
  }

  onNavClick = link => {
    navigate(link)
  }

  openSidebar() {
    document.getElementById("sidebar").style.display = "block"
  }

  closeSidebar() {
    document.getElementById("sidebar").style.display = "none"
  }
  render() {
    return this.state.smallScreen ? (
      <div className="sidebar">
        {/* <img src={menuIcon} alt="Menu" ></img> */}
        <MenuIcon
          color="#ffffff"
          size={30}
          onClick={this.openSidebar}
          className="sidebar-button-off"
        />
        <div
          class="sidebar-inner"
          style={{ display: "none" }}
          id="sidebar"
          onClick={this.closeSidebar}
        >
          <MenuIcon
            color="#000000"
            size={30}
            onClick={this.closeSidebar}
            className="sidebar-button-on"
          />
          <button
            onClick={this.onNavClick.bind(this, "#home")}
            className="sidebar-item"
          >
            Home
          </button>
          <button
            onClick={this.onNavClick.bind(this, "#work")}
            className="sidebar-item"
          >
            Work
          </button>
          <button
            onClick={this.onNavClick.bind(this, "#about")}
            className="sidebar-item"
          >
            About
          </button>
          <button
            onClick={this.onNavClick.bind(this, "#services")}
            className="sidebar-item"
          >
            Services
          </button>
          <button
            onClick={this.onNavClick.bind(this, "#contact")}
            className="sidebar-item"
          >
            Contact Us
          </button>
        </div>
      </div>
    ) : (
      <div
        id="navbar"
        className={this.state.scrolling ? "navbar-out" : "navbar-in"}
      >
        <img
          id="navbar-logo"
          src={this.state.scrolling ? logoSmall : logo}
          className={
            this.state.scrolling ? "navbar-logo-small" : "navbar-logo-large"
          }
        ></img>
        <div className="navbar-button-group">
          <button
            id="navbar-button"
            onClick={this.onNavClick.bind(this, "#home")}
            className={
              this.state.scrolling ? "navbar-button-out" : "navbar-button-in"
            }
          >
            Home
          </button>
          <button
            id="navbar-button"
            onClick={this.onNavClick.bind(this, "#work")}
            className={
              this.state.scrolling ? "navbar-button-out" : "navbar-button-in"
            }
          >
            Work
          </button>
          <button
            id="navbar-button"
            onClick={this.onNavClick.bind(this, "#about")}
            className={
              this.state.scrolling ? "navbar-button-out" : "navbar-button-in"
            }
          >
            About
          </button>
          <button
            id="navbar-button"
            onClick={this.onNavClick.bind(this, "#services")}
            className={
              this.state.scrolling ? "navbar-button-out" : "navbar-button-in"
            }
          >
            Services
          </button>
          <button
            id="navbar-button"
            onClick={this.onNavClick.bind(this, "#contact")}
            className={
              this.state.scrolling ? "navbar-button-out" : "navbar-button-in"
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    )
  }
}
export default Navbar
