import React, { Component } from 'react';

var querystring = require('querystring');

export default class StripeAuth extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var params = querystring.parse(this.props.location.search);
        var code = params.code;
        var state = params.state;

        console.log(code);
        console.log(state);

        console.log('StripeAuth component');
    }

    render() {
        return null;
    }
}
