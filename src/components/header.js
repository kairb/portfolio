// import { Link } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby";


const useStyles = makeStyles({
  header:{
    display:'flex',
    justifyContent: 'space-between'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/page-2">
        <h1>Experience</h1>
      </Link>
      <Link to="/">
        <h1>Blog</h1>
      </Link>
      <Link to="/">
        <h1>Contact</h1>
      </Link>
    </header>
  )
}


export default Header;
