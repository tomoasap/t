import React, { Component } from "react"
import Img from "gatsby-image"
import { Grid, Row, Col } from "react-flexbox-grid"
import "./about.css"

class About extends Component {
  render() {
    let image1
    let image2
    let images = this.props.aboutImages
    images.forEach(image => {
      switch (image.node.parent.name) {
        case "about-1":
          image1 = image.node.fluid
          break
        case "about-2":
          image2 = image.node.fluid
          break
      }
    })
    return (
      <div>
        <a name="about"></a>
        <div className="about-main">
          <h2 style={{ color: "#000000" }}>WHO WE ARE</h2>
          <div style={{ fontSize: 20, marginTop: 25, marginBottom: 50 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            volutpat ipsum sit amet arcu eleifend tempus.
          </div>
          <Grid fluid className="about-grid">
            <Row style={{ marginBottom: 50 }}>
              <Col xs={4} md={4}>
                <Img
                  fluid={image1}
                  alt={"about_image_1"}
                  style={{
                    maxWidth: "100%",
                    borderRadius: 100,
                  }}
                />
              </Col>
              <Col xs={8} md={8}>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#000000",
                    fontSize: 34,
                    textAlign: "right",
                  }}
                >
                  Max Mustard
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    color: "#000000",
                    fontSize: 28,
                    textAlign: "right",
                  }}
                >
                  Co-Founder / Developer
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 100 }}>
              <Col xs={8} md={8}>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#000000",
                    fontSize: 34,
                    textAlign: "left",
                  }}
                >
                  Joe Squishy
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    color: "#000000",
                    fontSize: 28,
                    textAlign: "left",
                  }}
                >
                  Co-Founder / Designer
                </div>
              </Col>
              <Col xs={4} md={4}>
                <Img
                  fluid={image2}
                  alt={"about_image_2"}
                  style={{
                    maxWidth: "100%",
                    borderRadius: 100,
                  }}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}
export default About
