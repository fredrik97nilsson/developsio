import React, { Component, ReactFragment }  from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './App.module.css';
import classes from './App.module.css';
import Button from './components/Button/Button';
import AdminPage from './components/AdminPage/AdminPage';
import ApplicantPage from './components/ApplicantPage/ApplicantPage';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Anton Was here</h1>
    </div>
  );
=======

class App extends Component {
  render () {



    return (
     
          <BrowserRouter>
            <div className= {classes.App}>
              <h1 className = {classes.Header}>Login Page</h1> 

                <NavLink to='/admin-page'>
                  <Button buttonName='Admin'> </Button>
                </NavLink>

                <NavLink to='/applicant-page'>
                  <Button buttonName='Applicant'></Button>
                </NavLink>
            </div>

          <Route path='/admin-page' component={AdminPage}/>
          <Route path='/applicant-page' component={ApplicantPage}/>


          </BrowserRouter>
      
    );
  }
>>>>>>> Stashed changes
}

export default App;
