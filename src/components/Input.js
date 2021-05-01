import React from 'react';
import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    <div>
      <div className={classes.TopBox}>
        <div className={classes.LeadTextDiv}>
          <div className={classes.LeadText1}>
            Nominate your
            <br />
            favorite movies.
          </div>

          <div className={classes.LeadText2}>
            Search below to nominate
            <br />
            your top 5 favorite movies.
          </div>
        </div>

        <div className={classes.LeadText3}>
          <strong>Movies Nominated: </strong> {props.movies.length}/5
        </div>
      </div>
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
