import React from 'react';
import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    <div>
      <input
        className={classes.Input}
        placeholder='Search movie titles'
        value={props.value}
        onChange={(e) => props.setSearchItem(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
