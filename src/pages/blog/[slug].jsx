import { makeStyles } from '@material-ui/core/styles';
import { getAllContentByID, getContentByID } from '../../utils/contentfulAPI';
const fs = require('fs');
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '20px',
  },
}));
const BlogPost = ({ data }) => {
  const classes = useStyles();

  const {
    sys: { slug, createdAt },
    fields: { title, shortDescription },
  } = data;
  // const router = useRouter();
  // const { slug } = router.query;
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
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      <h2>{shortDescription}</h2>
      <h3>{`By Kai Roper-Blackman, ${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`}</h3>
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