import React from 'react';
import { getAllContentByID } from '../../utils/contentfulAPI';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '20px',
  },
}));

const Index = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Blog</h1>
      {data.items.map(blogPost => {
        const { slug, title } = blogPost.fields;
        return (
          <Link key={slug} href={`/blog/${slug}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const data = await getAllContentByID('blogPost');
  return {
    props: {
      data: data,
    },
  };
};
