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
import PrivateRoute from '../components/PrivateRoute';

import app from '../components/Firebase/firebase';

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
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }


        });
    }

    render() {

        const { authenticated, loading } = this.state;

        if (loading) {
            return <p>Loading..</p>;
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/authorize" component={SetupPayment} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                            authenticated={authenticated}
                        />
                        <Route path="/token" component={StripeAuth} />
                        <Route path="/done" component={Done} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


/* clean way of setting up the connect. */
export default App;
