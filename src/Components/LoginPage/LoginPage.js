import classes from './LoginPage.module.css';
import React from 'react';


import InputField from '../UI/InputField/InputField';



function LoginPage() {
    return (
        <section className={classes.LoginPage}>
            

            <div>
                
                <h2>Login Page</h2>
                
                <h4>Username:</h4>
                <InputField placeholder='Username' />
                <h4>Password:</h4>
                <InputField placeholder='Password'/>
                
            </div>
            

        </section>
    );
}

export default LoginPage;