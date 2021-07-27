import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllContentByID, getContentByID } from '../../utils/contentfulAPI';
import marked from 'marked';
import parse from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {getLongDate} from '../../utils/date'

const fs = require('fs');
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '20px',
    '& pre': {
      borderRadius: '10px',
      padding: '10px',
    },
  },
  header: {
    borderBottom: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '10px',
  },
}));
const BlogPost = ({ data }) => {
  const classes = useStyles();
  const {
    sys: { createdAt },
    fields: { title, shortDescription, content },
  } = data;
  const html = parse(marked(content), {
    replace: domNode => {
      if (domNode.name === 'pre') {
        const codeString = domNode.children[0].children[0].data;
        return (
          <SyntaxHighlighter
            language="javascript"
            wrapLines
            wrapLongLines="white-space"
            style={a11yDark}
          >
            {codeString}
          </SyntaxHighlighter>
        );
      }
    },
  });

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>{title}</h1>
        <h2>{shortDescription}</h2>
        <h3>{`Kai Roper-Blackman, ${getLongDate(createdAt)}`}</h3>
      </div>
      {html}
    </div>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const pageMappings = JSON.parse(fs.readFileSync('./pages.json'));
  let id;
  pageMappings.forEach(page => {
    if (page.params.slug === params.slug) {
      id = page.params.id;
    }
  });
  const data = await getContentByID(id);
  return {
    props: {
      data: data,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await getAllContentByID('blogPost');
  const paths = data.items.map(item => {
    const {
      sys: { id },
      fields: { slug },
    } = item;
    return {
      params: {
        id: id,
        slug: slug,
      },
    };
  });
  fs.writeFileSync('./pages.json', JSON.stringify(paths));
  return {
    paths: paths,
    fallback: false,
  };
};
