import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginRequest } from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const credential = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.submit(credential);
    }

    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <a className="rocketrides" href="/"></a>
                        <a className="arrow" href="/login">Login</a>
                    </div>
                    <div className="title">
                        <h1>Log into your babysitter account</h1>
                    </div>
                </header>
                <div id="content">
                    <section className="form account">
                        <form autoComplete='off' onSubmit={this.onSubmit}>
                            <fieldset>
                                <div className='row' label='Email'>
                                    <input type='email' name='email' onChange={this.onChange} value={this.state.email} placeholder='jane@example.com' required autoFocus />
                                </div>
                                <div className="row" label='Password'>
                                    <input type='password' name='password' onChange={this.onChange} value={this.state.password} placeholder='••••••••' required />
                                </div>
                            </fieldset>
                            <input type='submit' value='Login' />
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    submit: PropTypes.func.isRequired
};

export default withRouter(connect(null, { submit: loginRequest })(Login));