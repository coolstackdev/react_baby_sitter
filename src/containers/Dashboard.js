import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <a className="rocketrides" href="/"></a>
                        <div className="links">
                            <a href='/pilots/dashboard'> Dashboard</a>
                            <a href='/pilots/logout'> Logout</a>
                        </div>
                    </div>
                    <div className="user">
                        <div className="block profile">
                            <div className="photo"></div>
                            <p> Pilot since January 2018</p>
                            <h1> John </h1>
                            <div className="rating"></div>
                        </div>
                        <div className="block week">
                            <p> This Week</p>
                            <h1> $25000 </h1>
                            <h2> 23 Rides</h2>
                        </div>
                        <div className="block available">
                            <p> Your Balance</p>
                            <h1> $1000</h1>
                            <h2> $900 Available</h2>
                        </div>
                        <div className="block stripe">
                            <a className="button" href='/pilots/stripe/transfers'> View Transfers</a>
                            <form action='/pilots/stripe/payout' method='POST' autoComplete='off'>
                                <input type='submit' value='Pay Out Now' />
                            </form>
                        </div>
                    </div>
                </header >
                <div id="content">
                    <section className="rides">
                        <h4>Recent Rides</h4>
                        <div className="list">
                            <div className="row">
                                <div className="cell name">Ruth H.</div>
                                <div className="cell date">Last Monday at 2:07 PM</div>
                                <div className="cell price">$51.76</div>
                            </div>
                            <div className="row">
                                <div className="cell name">Ruth H.</div>
                                <div className="cell date">Last Monday at 2:07 PM</div>
                                <div className="cell price">$22.40</div></div>
                            <div className="row">
                                <div className="cell name">Kathleen B.</div>
                                <div className="cell date">Last Monday at 2:07 PM</div>
                                <div className="cell price">$42.34</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        )
    }
}

export default withRouter(Dashboard);