import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { getContentByID } from '../utils/contentfulAPI';

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

const Index = ({ data }) => {
  const { line1, line2, line3 } = data;
  const classes = useStyles();
  return (
    <>
      <div className={classes.homePage}>
        <div className={classes.greetingContainer}>
          <h1>{line1}</h1> 
          <h1>{line2}</h1>
          <h1>{line3}</h1>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await getContentByID('3u6jVa5LdNzKhE4sbGjk6Y');
  return {
    props: {
      data: data.fields,
    },
  };
}

export default Index;
