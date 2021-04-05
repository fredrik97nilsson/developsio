import React from 'react';

import classes from './InputField.module.css';

const inputField = (props) => (
    <input className={classes.InputField} placeholder={props.placeholder}>{props.children}</input>
);

export default inputField;