import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import app from "./Firebase/firebase";
import * as userActions from '../store/modules/user';
import * as eventActions from '../store/modules/events';

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

        this.handleSignUp();
    }

    handleSignUp = async event => {
        const { UserActions, EventActions } = this.props;

        try {
            const user = await app
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password);

            console.log(user);

            var uid = user.user.uid;

            localStorage.setItem('uid', uid);
            localStorage.setItem('userEmail', user.user.email);

            UserActions.userLoggedIn(uid);

            this.props.history.push("/dashboard");
        } catch (error) {
            alert(error);
        }
    };

    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <Link className="rocketrides" to="/"></Link>
                        <p className="slogan">"Quality sitters <br /> on the fly"</p>

                    </div>
                    <div class="clear"></div>
                    <div className="title">
                        <h1>Log into your account</h1>
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

export default connect(
    (state) => ({
        authenticated: state.user.get('authenticated')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        EventActions: bindActionCreators(eventActions, dispatch)
    })
)(Login);
