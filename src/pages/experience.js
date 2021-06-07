import React from 'react';
import Project from '../components/Project';
import { makeStyles } from '@material-ui/styles';
import { getAllContentByID } from '../utils/contentfulAPI';

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
  project: {
    marginBottom: '20px',
  },
});

const Experience = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map(exp => (
        <div key={exp.fields.company} className={classes.project}>
          <Project project={exp.fields} />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await getAllContentByID('project');
  return {
    props: {
      data: data.items,
    },
  };
}

export default Experience;
