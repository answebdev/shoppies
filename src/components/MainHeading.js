import React from 'react';
import logo from '../img/shoppies-logo.png';
import classes from '../styles/App.module.css';

const MainHeading = (props) => {
  return (
    <div>
      <div>
        <img className={classes.LogoImg} src={logo} alt='' />
      </div>
    </div>
  );
};

export default MainHeading;
