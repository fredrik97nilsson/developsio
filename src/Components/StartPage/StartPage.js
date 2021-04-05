import React from 'react';
import classes from './StartPage.module.css';
import LoginPage from '../LoginPage/LoginPage';

function StartPage() {
    return(
        

        <div className={classes.StartPageHeader}>
            <LoginPage/>        
        </div>

        
    );
}

export default StartPage;