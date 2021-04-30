import React from 'react';
import classes from '../styles/NomButton.module.css';

const NominateButtonComponent = (props) => {
  return (
    <div>
      {props.isNominated ? (
        <button className={classes.NomBtnDisabled} disabled>
          Nominated
        </button>
      ) : (
        <button className={classes.NomBtn}>Nominate</button>
      )}
    </div>
  );
};

export default NominateButtonComponent;
