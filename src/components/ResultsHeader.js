import React from 'react';
import classes from '../styles/App.module.css';

const ResultsHeader = (props) => {
  return (
    <div>
      <div>
        <p className={classes.ResultsLeadText}>
          <strong>Movie results for:</strong> {props.searchItem}
        </p>
      </div>
    </div>
  );
};

export default ResultsHeader;
