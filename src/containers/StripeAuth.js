import React, { Component } from 'react';
import { sessionService } from 'redux-react-session';

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
                console.log('is matched');
            } else {
                console.log('not matched');
            }

        });

    }

    render() {
        return null;
    }
}
