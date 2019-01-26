import React, { Component } from 'react';

var querystring = require('querystring');

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.location);
    }

    componentDidMount() {
        console.log('StripeAuth component');
    }

    render() {
        return null;
    }
}
