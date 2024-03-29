import { Component } from 'react';
import axios from 'axios';
import { config } from '../config';

export default class Transfers extends Component {

    async redirectPage(url, data) {
        const response = await axios.post(url, data);
        console.log(response);

        if (response.data.success == 1) {
            var url = response.data.redirectUrl;

            console.log(url);

            window.location = url;
        } else {
            alert(response.data.msg);
            this.props.history.push("/");
        }
    }

    componentWillMount() {

        const uid = localStorage.getItem('uid');

        this.redirectPage(config.firebaseTransfers, { uid: uid });
    }

    render() {
        return null;
    }
}
