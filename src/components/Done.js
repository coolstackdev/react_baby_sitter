import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Done extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <a className="rocketrides" href="/"></a>
                        <p className="slogan">"Quality sitters <br /> on the fly"</p>
                        <div className="links">
                            <Link className="arrow" to="/login">Login</Link>
                        </div>
                    </div>
                    <div className="intro">
                        <div className="pilots">
                            <h1>You’re ready to get paid!</h1>
                            <h2>Download the app, and start taking your first Babysitting Event!</h2>

                        </div>
                    </div>
                </header>
                <div id="content">
                    <div className="checkmark">
                        <a className="button" href='/dashboard'> View Your Dashboard</a>
                    </div>
                </div>
                <div className="annotation info">
                    <p>The Connect Express onboarding flow is now complete!</p>
                </div>
            </div>
        )
    }
}

export default Done;