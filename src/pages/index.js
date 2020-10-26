import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  homePage: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  greetingContainer: {
    marginBottom: "30px",
    "& h1": {
      fontSize: "40px",
      fontWeight: 400,
      margin: 0,
    },
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        line1
        line2
        line3
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.homePage}>
        <div className={classes.greetingContainer}>
          <h1>{data.contentfulHomePage.line1}</h1>
          <h1>{data.contentfulHomePage.line2}</h1>
          <h1>{data.contentfulHomePage.line3}</h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
