import React from 'react';

//import classes from './InputField.module.css';

/*const inputField = (props) => (
    <input className={classes.InputField} placeholder={props.placeholder}>{props.children}</input>
);*/

function InputField(props) {
    const handleChange = (event) => {
        props.handleChanged(event.target);
    }

    return(
        <div>
            <input name={props.name} value={props.value} onChange={handleChange} />
        </div>
    );
}

export default InputField;