import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import Header from "./header/Header"
import "./layout.css"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#E9EDEE",
    width: "auto",
    height: "100vh",
    paddingLeft: "15%",
    paddingRight: "15%",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    fontFamily: "Poppins, sans-serif",
    flexGrow: "1",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  main:{
    flexGrow:'1'
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulPerson {
        id
        name
        firstName
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Header data={data} />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        {data.contentfulPerson.name} {new Date().getFullYear()}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
