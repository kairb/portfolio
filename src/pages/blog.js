import React from "react"

import SEO from "../components/seo"

const SecondPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     contentfulHomePage {
  //       line1
  //       line2
  //       line3
  //     }
  //   }
  // `)
  return (
    <>
      <SEO title="Blog" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </>
  )
}

export default SecondPage
