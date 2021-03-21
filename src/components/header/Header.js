import React, { useState } from "react"
import { makeStyles, Dialog } from "@material-ui/core"
import { Link } from "gatsby"
import HeaderUnderline from "./HeaderUnderline"
import theme from "../../theme"
import links from "./links.json"

const useStyles = makeStyles({
  desktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
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
  },
  activeLink: {
    "& h1": {
      color: "black",
    },
  },
  mobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
})



const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const mobileClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <header className={classes.desktop}>
        {links.links.map(link => (
          <Link to={`${link.slug}`} activeClassName={classes.activeLink}>
            <h1>{link.name}</h1>
            <HeaderUnderline route={`${link.slug}`} />
          </Link>
        ))}
      </header>
      <button onClick={mobileClick}>
        M
      </button>
      <Dialog fullScreen open={open} className={classes.mobile}>
        {links.links.map(link => (
          <Link to={`${link.slug}`} activeClassName={classes.activeLink} onClick={mobileClick}>
            <h1>{link.name}</h1>
          </Link>
        ))}
      </Dialog>
    </>
  )
}

export default Header
