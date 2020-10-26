import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"
import HeaderUnderline from "./HeaderUnderline"

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    "& h1": {
      fontWeight: "400",
      color: "grey",
      marginBottom: "5px",
    },
    "& a": {
      textDecoration: "none",
    },
    "& h1:hover": {
      color: "black",
    },
  },
  activeLink: {
    "& h1": {
      color: "black",
    },
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Link to="/" activeClassName={classes.activeLink}>
        <h1>Home</h1>
        <HeaderUnderline route="/" />
      </Link>
      <Link to="/experience" activeClassName={classes.activeLink}>
        <h1>Experience</h1>
        <HeaderUnderline route="experience" />
      </Link>
      <Link to="/blog" activeClassName={classes.activeLink}>
        <h1>Blog</h1>
        <HeaderUnderline route="blog" />
      </Link>
      <Link to="/contact" activeClassName={classes.activeLink}>
        <h1>Contact</h1>
        <HeaderUnderline route="contact" />
      </Link>
    </header>
  )
}

export default Header
