import React from "react"
import Technology from "../Technology"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  technologyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  projectInnerContainer: {
    display: "flex",
    flexDirection: "row",
  },
})

const Project = ({ project }) => {
  const classes = useStyles()
  console.log("Project component ", project)
  return (
    <div>
      <h1>{project.company}</h1>
      <div className={classes.projectInnerContainer}>
        <p>{project.description.description}</p>
        {console.log(project.technologies)}
        <div className={classes.technologyContainer}>
          {project.technologies.map(random => (
            <Technology technology={random} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
