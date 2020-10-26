import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  headerUnderline: {
    maxWidth: "100%",
    height: "5px",
    display: "flex",
    flexDirection: "row",
  },
  left: {
    width: "50%",
    backgroundColor: "#489787",
  },
  right: {
    width: "50%",
    backgroundColor: "#DB5F27",
  },
})

const getPathName = () => {
  return typeof window !== "undefined" ? window.location.pathname : "/"
}

const HeaderUnderline = ({ route }) => {
  const classes = useStyles()
  if ((route.length >1 && getPathName().includes(route,1)) || (getPathName() === route) ) {
    return (
      <div className={classes.headerUnderline}>
        <div className={classes.left} />
        <div className={classes.right} />
      </div>
    )
  } else {
    return <></>
  }
}

export default HeaderUnderline
