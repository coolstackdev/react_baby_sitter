import React, { Component } from 'react';

var querystring = require('querystring');

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);

        var code = querystring.parse(this.props.location.search, { ignoreQueryPrefix: true }).code;
        console.log(code);
    }

    componentDidMount() {
        console.log('StripeAuth component');
    }

    render() {
        return null;
    }
}
