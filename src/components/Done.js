import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Done extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <Link className="rocketrides" to="/"></Link>
                        <p className="slogan">"Quality sitters <br /> on the fly"</p>
                        <div className="links">
                            <Link to="/login">Login</Link>
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
                    <p>The Connect Express onboarding flow is now complete! The platform can now use a simple API call to retrieve the Stripe account ID that was just created and save it to its database. This Stripe account ID can then be used to retrieve the sitter's balance, as a destination for payments, or to create instant payouts.</p>
                </div>
            </div>
        )
    }
}

export default Done;