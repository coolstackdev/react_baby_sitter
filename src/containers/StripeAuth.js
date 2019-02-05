import { Component } from 'react';
import axios from 'axios';
import { config } from '../config';

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMatched: false,
            redirect: false
        }
    }

    async redirectPage(url, data) {
        const response = await axios.post(url, data);

        if (response.data.success == 1) {
            this.props.history.push("/done");
        } else {
            alert(response.data.msg);
            this.props.history.push("/");
        }
    }

    componentWillMount() {

        // get query string from redirected uri
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const code = params.get('code');
        const state = params.get('state');

        const uid = localStorage.getItem('uid');

        if (localStorage.getItem('status') == state) {
            this.state.isMatched = true;
            console.log('status key is matched');

            // if matched, send second request to stripe for getting stripe account id for Babysitters
            var data = {
                uid: uid,
                code: code
            };

            var url = config.firebaseStripeAuth;

            this.redirectPage(url, data);

        } else {
            console.log('not matched');
            this.props.history.push('/');
        }
    }

    render() {
        return null;
    }
}
