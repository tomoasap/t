import React, { Component } from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import DesktopMacDashboardIcon from "mdi-react/DesktopMacDashboardIcon"
import CodepenIcon from "mdi-react/CodepenIcon"
import ShieldSearchIcon from "mdi-react/ShieldSearchIcon"
import ServerSecurityIcon from "mdi-react/ServerSecurityIcon"
import "./services.css"
import bannerWave from "../../images/foundation-banner-wave-flip.svg"

class Services extends Component {
  render() {
    return (
      <div>
        <a name="services"></a>
        <div className="services-main">
          <h2 style={{ color: "#000000", textAlign: "left" }}>OUR SERVICES</h2>
          <div style={{ fontSize: 20, marginTop: 25, textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            volutpat ipsum sit amet arcu eleifend tempus.
          </div>
          <Grid fluid className="services-grid">
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div
                  style={{
                    boxShadow: "4px 4px 10px #555555",
                    margin: 10,
                    padding: 25,
                  }}
                >
                  <div>
                    <DesktopMacDashboardIcon color="#323680" size={150} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#000000",
                        fontSize: 34,
                      }}
                    >
                      Web Design
                    </h3>
                  </div>
                  <div
                    style={{
                      marginTop: 15,
                      fontSize: 20,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi volutpat ipsum sit amet arcu eleifend tempus.
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div
                  style={{
                    boxShadow: "4px 4px 10px #555555",
                    margin: 10,
                    padding: 25,
                  }}
                >
                  <div>
                    <CodepenIcon color="#e6712e" size={150} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#000000",
                        fontSize: 34,
                      }}
                    >
                      Web Development
                    </h3>
                  </div>
                  <div
                    style={{
                      marginTop: 15,
                      fontSize: 20,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi volutpat ipsum sit amet arcu eleifend tempus.
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div
                  style={{
                    boxShadow: "4px 4px 10px #555555",
                    margin: 10,
                    padding: 25,
                  }}
                >
                  <div>
                    <ShieldSearchIcon color="#18A999" size={150} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#000000",
                        fontSize: 30,
                      }}
                    >
                      Search Engine Optimization
                    </h3>
                  </div>
                  <div
                    style={{
                      marginTop: 15,
                      fontSize: 20,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi volutpat ipsum sit amet arcu eleifend tempus.
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div
                  style={{
                    boxShadow: "4px 4px 10px #555555",
                    margin: 10,
                    padding: 25,
                  }}
                >
                  <div>
                    <ServerSecurityIcon color="#82204A" size={150} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#000000",
                        fontSize: 34,
                      }}
                    >
                      Hosting & Maintenance
                    </h3>
                  </div>
                  <div
                    style={{
                      marginTop: 15,
                      fontSize: 20,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi volutpat ipsum sit amet arcu eleifend tempus.
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Services
