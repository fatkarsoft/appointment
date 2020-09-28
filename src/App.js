/* eslint-disable import/named */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory as History } from 'history';
import './App.css';
import AuthConsumer, { AuthProvider, AuthRoute } from './contexts/AuthContext';
import {
  Home,
  Login,
  AppointmentCreate,
  AppointmentList,
  AppointmentUpdate,
} from './views';


import './config/Utilities';

function App() {
  return (
    <Router history={History()}>
      <AuthProvider>
        <AuthConsumer>
          {() => (
            <Switch>
              <Route exact path="/login" component={Login} />
              <AuthRoute exact path={['/Home', '/']} component={Home} /> 
              <AuthRoute exact path={['/AppointmentCreate', '/']} component={AppointmentCreate} /> 
              <AuthRoute exact path={['/AppointmentList', '/']} component={AppointmentList} /> 
              <AuthRoute exact path={['/AppointmentUpdate/:id', '/']} component={AppointmentUpdate} /> 
            </Switch>
          )}
        </AuthConsumer>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
