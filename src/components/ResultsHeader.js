import React from 'react';
import classes from '../styles/App.module.css';

const ResultsHeader = (props) => {
  return (
    <div>
      <div>
        <p className={classes.ResultsLeadText}>
          {props.searchItem.length > 0 ? (
            <strong>Movie results for:</strong>
          ) : null}
          &nbsp;
          {props.searchItem}
        </p>
      </div>
    </div>
  );
};

export default ResultsHeader;
