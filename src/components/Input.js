import React from 'react';

const Input = (props) => {
  return (
    <div>
      <input
        placeholder='Search movie titles'
        value={props.value}
        onChange={(e) => props.setSearchItem(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
