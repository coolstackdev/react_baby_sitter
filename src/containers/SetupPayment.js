import { Component } from 'react';
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

        localStorage.setItem('status', status);

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
