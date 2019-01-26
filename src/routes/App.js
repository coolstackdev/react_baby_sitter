import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './Style.css';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Done from '../containers/Done';
import Dashboard from '../containers/Dashboard';
import SetupPayment from '../containers/SetupPayment';
import StripeAuth from '../containers/StripeAuth';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/authorize" component={SetupPayment} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/token" component={StripeAuth} />
                        <Route path="/done" component={Done} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;