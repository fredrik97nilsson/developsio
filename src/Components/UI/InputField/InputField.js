import React from 'react';

import classes from './InputField.module.css';

/*const inputField = (props) => (
    <input className={classes.InputField} placeholder={props.placeholder}>{props.children}</input>
);*/

function InputField(props) {
    const handleChange = (event) => {
        props.changed(event.target.value);
    }

    return(
        <div>
            <input value={props.value} onChange={handleChange} />
        </div>
    );
}

export default InputField;