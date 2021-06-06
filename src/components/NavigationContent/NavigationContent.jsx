import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import links from '../../links.json';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles({
  desktop: {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      fontWeight: '400',
      color: 'grey',
      marginBottom: '5px',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& h1:hover': {
      color: 'black',
    },
  },
  activeLink: {
    color: 'black',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: '100px',
    borderRadius: '50%',
  },
});

const DesktopNav = () => {
  const data = useStaticQuery(graphql`
    query navQuery {
      contentfulPerson {
        id
        name
        jobTitle
        image {
          fluid(maxWidth: 300) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            src
            srcSet
            aspectRatio
            sizes
          }
        }
      }
    }
  `);
  const classes = useStyles();
  const {
    name,
    jobTitle,
    image: { fluid },
  } = data.contentfulPerson;
  return (
    <header className={classes.desktop}>
      <div className={classes.profile}>
        <div>
          {/* <Img className={classes.profileImage} fluid={fluid} /> */}
        </div>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
      </div>
      <div>
        {links.links.map(link => (
          <Link to={`${link.slug}`} className={classes.activeLink}>
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default DesktopNav;
