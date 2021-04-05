import React from 'react';

import Button from '../UI/Button/Button';
import classes from './StartPage.module.css';
import {Route, NavLink} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

function StartPage() {
    return(
        

        <div className={classes.StartPageHeader}>

        <h1>DEVELOPSIO</h1>

        <h4>If you're not among the top 1%, we won't even bother looking at your resumé :)</h4>
        
        <h2>Already have an account?</h2>
        
        <div className={classes.StartPage}>
            
               <NavLink to='/create-account'> <Button 
                    btnType='Danger'
                    >No</Button>
                </NavLink>

                <NavLink to='login-page'>
                <Button 
                    btnType='Success'
                    >Yes</Button>
                </NavLink>
        </div>
        
        <Route path='/login-page' component={LoginPage} />
        
        </div>

        
    );
}

export default StartPage;