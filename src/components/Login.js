import React, { Component } from 'react';
import app from "./Firebase/firebase";

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
        try {
            const user = await app
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password);

            localStorage.setItem('currentUser', user);

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

export default Login;