import React from 'react';

import SEO from '../components/seo';

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
      <h1>Blog</h1>
    </>
  );
};

export default SecondPage;
