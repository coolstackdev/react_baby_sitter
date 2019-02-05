import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';
import Done from '../components/Done';
import DashboardContainer from './DashboardContainer';
import HomeContainer from './HomeContainer';
import SetupPayment from './SetupPayment';
import StripeAuth from './StripeAuth';
import Transfers from './Transfers';

class App extends Component {

    render() {
        const { authenticated } = this.props;

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={HomeContainer} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/authorize" component={SetupPayment} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={DashboardContainer}
                            authenticated={authenticated}
                        />
                        <Route path="/token" component={StripeAuth} />
                        <Route path="/done" component={Done} />
                        <PrivateRoute
                            exact
                            path="/transfers"
                            component={Transfers}
                            authenticated={authenticated}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        authenticated: state.user.get('authenticated')
    })
)(App);
