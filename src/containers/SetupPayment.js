import React, { Component } from 'react';
import { sessionService } from 'redux-react-session';

import { config } from '../config';

var querystring = require('querystring');
var randomString = require('random-string');

export default class SetupPayment extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var status = randomString();

        this.state = {
            status: status
        }

        sessionService.saveSession({ status: status })
            .then(() => {
                console.log('SetupPayment component mounted, session value: ');
                sessionService.loadSession
                    .then(currentSession => console.log(currentSession))
                    .catch(err => console.log(err))
            });

        let parameters = {
            client_id: config.clientId,
            state: status
        };

        var url = config.authorizeUri + '?' + querystring.stringify(parameters);
        window.location = url;
    }

    render() {
        return null;
    }
}
