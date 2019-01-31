import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import PrivateRoute from '../components/PrivateRoute';
import app from '../components/Firebase/firebase';

import Login from '../components/Login';
import Done from '../components/Done';
import DashboardContainer from './DashboardContainer';
import HomeContainer from './HomeContainer';

import SetupPayment from './SetupPayment';
import StripeAuth from './StripeAuth';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            authenticated: false,
            user: null
        };
    }

    componentWillMount() {

        // need to change with state
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isAuthenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    isAuthenticated: false,
                    currentUser: null,
                    loading: false
                });
            }

        });
    }

    render() {

        const { isAuthenticated, loading } = this.state;

        if (loading) {
            return <p>Loading..</p>;
        }

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
                            authenticated={isAuthenticated}
                        />
                        <Route path="/token" component={StripeAuth} />
                        <Route path="/done" component={Done} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
