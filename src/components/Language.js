import React from "react"
import { graphql, StaticQuery } from "gatsby"


const Language = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulProgrammingLanguage {
          nodes {
            programmingLanguage
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>
          {data.allContentfulProgrammingLanguage.nodes[0].programmingLanguage}
        </h1>
      </header>
    )}
  />
)


export default Language
