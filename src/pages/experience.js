import React from "react"
import { useStaticQuery } from "gatsby"
import SEO from "../components/seo"

import Project from "../components/Project/Project"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    // width: "100%",
    // height: "100%",
  },
  project: {
    margin: "20px 0px",
  },
})

const Experience = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience {
        nodes {
          company
          description {
            description
          }
          technologies {
            technology
            logo {
              description
              id
              file {
                url
              }
            }
          }
          from
          to
          role
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Experience" />
      <div className={classes.root}>
        {data.allContentfulExperience.nodes.map(exp => (
          <div className={classes.project}>
            <Project project={exp} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience
