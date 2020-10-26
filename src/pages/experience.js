import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from '../components/project/Project'

const Experience = () => {
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
              id
              file {
                url
              }
            }
          }
        }
      }
    }`)

    return (
      <Layout>
        <SEO title="Experience" />
        {data.allContentfulExperience.nodes.map((exp) => 
          <Project project={exp} />
        )}
      </Layout>
    )
  
  }

export default Experience
