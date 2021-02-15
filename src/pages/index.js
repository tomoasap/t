import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Work from "../components/work/Work"
import About from "../components/about/About"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"

class IndexPage extends Component {
  render() {
    let workImages = []
    let aboutImages = []
    let images = this.props.data.allImageSharp.edges
    images.forEach(image => {
      let imageName = image.node.parent.name
      if (imageName.includes("work")) {
        workImages.push(image)
      } else if (imageName.includes("about")) {
        aboutImages.push(image)
      }
    })
    return (
      <Layout>
        <SEO title="Home" />
        <Home />
        <Work workImages={workImages} />
        <About aboutImages={aboutImages} />
        <Services />
        <Contact />
      </Layout>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query AllWorkImageQuery {
    allImageSharp {
      edges {
        node {
          id
          parent {
            ... on File {
              id
              name
            }
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
