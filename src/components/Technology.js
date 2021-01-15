import React from "react"
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  image:{
    width: '50px',
    height: '50px'
  }
})


const Technology = ({technology}) => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.image} src={technology.logo.file.url} alt={`${technology.technology} logo`}></img>
    </div>
  )
}


export default Technology
