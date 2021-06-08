import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getContentByID } from '../utils/contentfulAPI';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '97vh',
    textAlign: 'center',
  },
  pepe: {
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
        file: {
          url,
          details: { image },
        },
      },
    },
  } = data;
  const imageWidth = 300;
  const imageHeight = image.height / (image.width / imageWidth);
  return (
    <div className={classes.root}>
      <Image
        className={classes.pepe}
        src={`https:${url}`}
        alt={description}
        width={imageWidth}
        height={imageHeight}
      />
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
