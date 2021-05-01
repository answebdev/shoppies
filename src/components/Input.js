import React from 'react';
import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    <div>
      {/* <p className={classes.LeadText}>Nominate your favorite movies.</p> */}
      <p className={classes.LeadText}>
        Search below to nominate your top 5 favorite movies.
      </p>
      {props.nominate.length === 5 ? (
        <input
          disabled
          className={classes.Input}
          placeholder='Search movie titles'
          value={props.value}
          onChange={(e) => props.setSearchItem(e.target.value)}
        ></input>
      ) : (
        <input
          type='text'
          className={classes.Input}
          placeholder='Search movie titles'
          value={props.value}
          onChange={(e) => props.setSearchItem(e.target.value)}
        ></input>
      )}
    </div>
  );
};

export default Input;
