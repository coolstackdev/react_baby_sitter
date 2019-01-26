import React, { Component } from 'react';
import { sessionService } from 'redux-react-session';

var querystring = require('querystring');

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const code = params.get('code');
        const state = params.get('state');

        console.log(code + "," + state);

        sessionService.loadSession
            .then(currentSession => {
                console.log(currentSession);
            })
            .catch(err => console.log(err));

    }

    render() {
        return null;
    }
}
