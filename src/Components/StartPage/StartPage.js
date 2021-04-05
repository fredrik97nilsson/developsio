import React from 'react';

import Button from '../UI/Button/Button';
import classes from './StartPage.module.css';
import {Route, NavLink} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

function StartPage() {
    return(
        

        <div className={classes.StartPageHeader}>
            <LoginPage/>        
        </div>

        
    );
}

export default StartPage;