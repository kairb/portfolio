import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const useStyles = makeStyles({
  homePage: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  greetingContainer: {
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    zIndex: '2',
    height: '400px',
    width: '400px',
    borderRadius: '50%',
  },
});

const IndexPage = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query homePageQuery {
      contentfulHomePage {
        line1
        line2
        line3
        homepageImage {
          fluid(maxWidth: 300) {
            src
          }
        }
      }
    }
  `);
  return (
    <>
      <SEO title="Home" />
      <div className={classes.homePage}>
        <Img
          className={classes.image}
          fluid={data.contentfulHomePage.homepageImage.fluid}
        />
        <div className={classes.greetingContainer}>
          <h1>{data.contentfulHomePage.line1}</h1>
          <h1>{data.contentfulHomePage.line2}</h1>
          <h1>{data.contentfulHomePage.line3}</h1>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
