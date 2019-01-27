import React, { Component } from 'react';
import { sessionService } from 'redux-react-session';
import axios from 'axios';
import { config } from '../config';

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMatched: false
        }
    }

    componentDidMount() {

        // get query string from redirected uri
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const code = params.get('code');
        const state = params.get('state');

        // get session and check if two state matched
        sessionService.loadSession().then(result => {

            if (result.status == state) {
                this.state.isMatched = true;
                console.log('status key is matched');

                // if matched, send second request to stripe for getting stripe account id for Babysitters
                var params = {
                    grant_type: 'authorization_code',
                    client_secret: config.secretKey,
                    code: code
                };

                axios.post(config.tokenUri, params)
                    .then(
                        res => console.log(res.data)
                    );


            } else {
                console.log('not matched');
            }

        });

    }

    render() {
        return null;
    }
}
