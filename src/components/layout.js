import React, { Component } from "react"
import Navbar from "./navbar/Navbar"
import "./layout.css"

class layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar />
        <div class="area">{children}</div>
      </div>
    )
  }
}
export default layout
