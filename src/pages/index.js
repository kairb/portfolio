import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/styles'

import Layout from "../components/layout"

const useStyles = makeStyles({
  greeting: {
    fontSize: "40px",
  },
  greetingContainer:{

  }
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
      <div className={classes.greetingContainer}>
        <h1 className={classes.greeting}>{data.contentfulHomePage.line1}</h1>
        <h1 className={classes.greeting}>{data.contentfulHomePage.line2}</h1>
        <h1 className={classes.greeting}>{data.contentfulHomePage.line3}</h1>
      </div>
    </Layout>
  )
}


export default IndexPage
