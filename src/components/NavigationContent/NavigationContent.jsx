import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import links from '../../links.json';
import Link from 'next/link';

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
  // const data = useStaticQuery(graphql`
  //   query navQuery {
  //     contentfulPerson {
  //       id
  //       name
  //       jobTitle
  //       image {
  //         fluid(maxWidth: 300) {
  //           base64
  //           tracedSVG
  //           srcWebp
  //           srcSetWebp
  //           src
  //           srcSet
  //           aspectRatio
  //           sizes
  //         }
  //       }
  //     }
  //   }
  // `);
  const classes = useStyles();
  // const { name, jobTitle } = data.contentfulPerson;
  return (
    <header className={classes.desktop}>
      <div className={classes.profile}>
        <div>
          {/* <Img className={classes.profileImage} fluid={fluid} /> */}
        </div>
        {/* <h2>{name}</h2>
        <h3>{jobTitle}</h3> */}
      </div>
      <div>
        {links.links.map(link => (
          <Link href={`${link.slug}`} >
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default DesktopNav;
