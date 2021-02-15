import React, { Component } from "react"
import Img from "gatsby-image"
import { Grid, Row, Col } from "react-flexbox-grid"
import "./work.css"

class Work extends Component {
  render() {
    let image1
    let image2
    let image3
    let image4
    let image5
    let image6
    let images = this.props.workImages
    images.forEach(image => {
      switch (image.node.parent.name) {
        case "work-1":
          image1 = image.node.fluid
          break
        case "work-2":
          image2 = image.node.fluid
          break
        case "work-3":
          image3 = image.node.fluid
          break
        case "work-4":
          image4 = image.node.fluid
          break
        case "work-5":
          image5 = image.node.fluid
          break
        case "work-6":
          image6 = image.node.fluid
          break
      }
    })

    return (
      <div>
        <a name="work"></a>
        <div style={{}} className="work-main">
          <h2>OUR WORK</h2>
          <Grid fluid className="work-grid">
            <Row>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image1}
                  alt={"work_image_1"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image2}
                  alt={"work_image_2"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image3}
                  alt={"work_image_3"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image4}
                  alt={"work_image_4"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image5}
                  alt={"work_image_5"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
                  }}
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <Img
                  fluid={image6}
                  alt={"work_image_6"}
                  style={{
                    marginTop: 10,
                    maxWidth: "100%",
                    boxShadow: "4px 4px 10px #555555",
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
export default Work
