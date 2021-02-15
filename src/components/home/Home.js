import React, { Component } from "react"
import "./home.css"
import YoutubeIcon from "mdi-react/YoutubeIcon"
import Modal from "../modal/Modal"

import bannerWave from "../../images/foundation-banner-wave.svg"

let modalContent = (
  // <iframe
  //   src="https://www.youtube.com/embed/E7wJTI-1dvQ"
  //   frameBorder="0"
  //   allow="autoplay; encrypted-media"
  //   allowFullScreen
  //   title="video"
  //   style={{ width: "100%", height: 400 }}
  // />
  <iframe
    id="youtube-player"
    src="https://www.youtube.com/embed/gOqlwlQjVis?controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style={{
      paddingLeft: "3%",
      paddingRight: "3%",
      width: "100%",
      height: 400,
    }}
  ></iframe>
)

class Home extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }
  resize() {
    this.setState({ smallScreen: window.innerWidth <= 860 })
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Modal content={modalContent} />
        <div class="home-main">
          <a name="home"></a>

          <p>
            <h1>We are BlueCircle</h1>
            <div
              style={{
                marginBottom: this.state.smallScreen
                  ? "calc(0px + -5vh)"
                  : "calc(100px + -5vw)",
                color: "#FFFFFF",
                fontSize: 20,
                paddingBottom: 50,
              }}
            >
              We build beautifully crafted websites to help you make an impact
              on the web.
            </div>
            <YoutubeIcon
              color="#FFFFFF50"
              size={100}
              onClick={this.openModal.bind(this, "item")}
              style={{
                maxWidth: "100%",
                marginBottom: this.state.smallScreen
                  ? "calc(155px + -5vh)"
                  : "calc(100px + -5vw)",
                cursor: "pointer",
              }}
            />
            <img
              src={bannerWave}
              style={{
                overflow: "hidden",
                width: "100%",
              }}
            ></img>
          </p>
        </div>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}
export default Home
