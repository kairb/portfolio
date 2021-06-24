import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getContentByID } from '../utils/contentfulAPI';
import BallBackground from '../components/BallBackground';

const useStyles = makeStyles({
  homePage: {
    height: '100vh',
    width: '100%',
  },
});

const Index = () => {
  const classes = useStyles();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    key: Math.random(),
  });
  useEffect(() => {
    const el = document.getElementById('home');
    setDimensions({
      width: el.offsetWidth,
      height: el.offsetHeight,
      key: Math.random(),
    });
    function handleResize() {
      setDimensions({
        width: el.offsetWidth,
        height: el.offsetHeight,
        key: Math.random(),
      });
    }
    window.addEventListener('resize', handleResize);
  },[]);
  return (
    <div id="home" className={classes.homePage}>
      <BallBackground
        width={dimensions.width}
        height={dimensions.height}
        key={dimensions.key}
      />
    </div>
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
