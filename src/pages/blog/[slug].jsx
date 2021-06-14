import { makeStyles } from '@material-ui/core/styles';
import { getAllContentByID, getContentByID } from '../../utils/contentfulAPI';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import { useEffect } from 'react';

const fs = require('fs');
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '20px',
    '& hr': {
      width: '100%',
    },
  },
  header: {
    borderBottom: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    marginTop: '20px',
    '& pre': {
      borderRadius: '10px',
      padding: '10px',
      backgroundColor: theme.palette.codeBackgroundColor,
      color: 'white',
    },
  },
}));
const BlogPost = ({ data }) => {
  const classes = useStyles();
  const {
    sys: { createdAt },
    fields: { title, shortDescription, content },
  } = data;
  const date = new Date(createdAt);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  useEffect(() => {
    hljs.configure({ languages: ['javascript'] });
    hljs.highlightAll();
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>{title}</h1>
        <h2>{shortDescription}</h2>
        <h3>{`Kai Roper-Blackman, ${
          monthNames[date.getMonth()]
        } ${date.getFullYear()}`}</h3>
      </div>
      {/* <hr /> */}
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
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
