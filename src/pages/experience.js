import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from '../components/project/Project'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  experiencePage:{
    width:'100%',
    height:'100%'
  },
  project:{
    paddingBottom:'30px'
  }
})

const Experience = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query{
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
        }
      }
    }
  `)

    return (
      <Layout>
        <SEO title="Experience" />
        <div className={classes.experiencePage}>
          {data.allContentfulExperience.nodes.map((exp) => 
            <Project className={classes.project} project={exp} />
          )}
        </div>
      </Layout>
    )
  
  }

export default Experience
