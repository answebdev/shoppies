import React from 'react';

const ResultsHeader = (props) => {
  return (
    <div>
      <div>
        <p>
          <strong>Movie results for:</strong> {props.searchItem}
        </p>
      </div>
    </div>
  );
};

export default ResultsHeader;
