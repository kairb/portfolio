import React from 'react';
import { getAllContentByID } from '../../utils/contentfulAPI';
import { makeStyles } from '@material-ui/core/styles';
import BlogCard from '../../components/BlogCard/BlogCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '10px',
  },
  cards: {
    '& div': {
      minWidth: '250px',
      flex: 1,
    },
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const Index = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Blog</h1>
      <div className={classes.cards}>
        {data.items.map(blogPost => {
          return (
            <BlogCard key={blogPost.fields.slug} blogPost={blogPost.fields} />
          );
        })}
      </div>
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
