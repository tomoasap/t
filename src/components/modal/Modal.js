import React, { Component } from "react"
import "./modal.css"

class Modal extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }

  render() {
    return (
      <div id="modal" className="modal" onClick={this.closeModal}>
        <div
          className={
            this.state.smallScreen ? "modal-content-small" : "modal-content"
          }
        >
          <div>{this.props.content}</div>
        </div>
      </div>
    )
  }
}
export default Modal
