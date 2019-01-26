import React, { Component } from 'react';

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

        console.log(this.props.location);
        console.log(params);
        console.log('code' + code);
        console.log('state' + state);

    }

    render() {
        return null;
    }
}
