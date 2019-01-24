import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './Style.css';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={() => { window.location = 'https://connect.stripe.com/express/oauth/authorize?client_id=ca_EBGHFCVpNrqdC77TZBzGqewdeOcI8SGq'; return null; }} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;