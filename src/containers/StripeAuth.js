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

        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const code = params.get('code');
        const state = params.get('state');

        console.log(code + "," + state);

        // var session = sessionService.loadSession();
        // console.log(session);

        sessionService.loadSession().then(result => {
            if (result.status == state) {
                this.state.isMatched = true;
                console.log('status key is matched');

                var params = {
                    form: {
                        grant_type: 'authorization_code',
                        client_id: config.stripe.clientId,
                        client_secret: config.stripe.secretKey,
                        code: code
                    },
                    json: true
                };

                axios.post(config.tokenUri, params)
                    .then(
                        res => {
                            console.log(res.data)

                            // var stripeAccountId = body.stripe_user_id;

                        }
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
