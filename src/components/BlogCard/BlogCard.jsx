import React from 'react';
import { getAllContentByID } from '../../utils/contentfulAPI';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '20px',
    boxShadow: theme.palette.boxShadow,
    margin: '10px',
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
    },
  },
}));

const BlogCard = ({ blogPost }) => {
  const classes = useStyles();
  console.log(blogPost);
  const { title, shortDescription, slug } = blogPost;
  return (
    <Link href={`/blog/${slug}`}>
      <div className={classes.root}>
        <h1>{title}</h1>
        <p>{shortDescription}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
