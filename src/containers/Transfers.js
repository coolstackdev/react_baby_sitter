import { Component } from 'react';
import axios from 'axios';
import { config } from '../config';

export default class Transfers extends Component {

    componentWillMount() {

        const uid = localStorage.getItem('uid');
        axios.post(config.firebaseTransfers, { uid: uid });
    }

    render() {
        return null;
    }
}
