import React, { Component } from "react"
import bannerWave from "../../images/foundation-banner-wave-flip.svg"
import TwitterBoxIcon from "mdi-react/TwitterBoxIcon"
import FacebookBoxIcon from "mdi-react/FacebookBoxIcon"
import GithubBoxIcon from "mdi-react/GithubBoxIcon"
import "./contact.css"
class Contact extends Component {
  render() {
    return (
      <div>
        <a name="contact"></a>
        <img src={bannerWave} style={{ width: "100%", overflow: "auto" }}></img>
        <div className="contact-main">
          <h2 style={{ color: "#FFFFFF" }}>GET IN TOUCH</h2>
          <div style={{ color: "#FFFFFF", fontSize: 24, marginTop: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            volutpat ipsum sit amet arcu eleifend tempus.
          </div>
          <form className="contact-form">
            Email Us: <input type="text" className="contact-form-input"></input>
          </form>
          <div className="contact-social-icons">
            <TwitterBoxIcon color="#ffffff" size={100} />
            <FacebookBoxIcon color="#ffffff" size={100} />
            <GithubBoxIcon color="#ffffff" size={100} />
          </div>
        </div>
      </div>
    )
  }
}
export default Contact
