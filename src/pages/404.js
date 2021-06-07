import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getContentByID } from '../utils/contentfulAPI';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '97vh',
  },
  pepe: {
    width: '300px',
    borderRadius: '25%',
  },
}));
const NotFoundPage = ({ data }) => {
  const classes = useStyles();
  const {
    message,
    image: {
      fields: {
        description,
        file: { url },
      },
    },
  } = data;
  console.log(data);
  return (
    <div className={classes.root}>
      <img className={classes.pepe} src={url} alt={description} />
      <h1>{message}</h1>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getContentByID('1lvghkZDqrIdSP039dDxuF');
  return {
    props: {
      data: data.fields,
    },
  };
}

export default NotFoundPage;
