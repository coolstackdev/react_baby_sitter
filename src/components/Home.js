import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({
    authenticated,
    onLogout
}) => {
    return (
        <div>
            <header>
                <div id="top">
                    <Link className="rocketrides" to="/"></Link>
                    <p className="slogan">"Quality sitters <br /> on the fly"</p>

                    {authenticated ? (
                        <div className="links dashboard_links">
                            <Link to="/dashboard">Dashboard</Link>
                            <a onClick={onLogout}>Logout</a>
                        </div>
                    ) : (
                            <div className="links">
                                <Link className="arrow" to="/login">Login</Link>
                            </div>
                        )}
                </div>
                <div className="intro">
                    <div className="pilots">
                        <h1>Get ready</h1>
                        <h2>Join our elite Lightning Bug Babysitters team.</h2>
                        <br />
                    </div>
                </div>
            </header>
            <div id="content">
                <div className="features">
                    <section className="app">
                        <h3> Lightning Bug app for IOS and Android</h3>
                        <p> Sign up, login, and start earning today!</p>
                    </section>
                    <section className="schedule">
                        <h3> Be Your Own Boss</h3>
                        <p> Join the Lightning Bug Babysitters team.</p>
                        <p className="invisible"> Pick up your own schedule </p>
                    </section>
                    <section className="earnings">
                        <h3> Earn more</h3>
                        <p>Cash out whenever you want and get instant transfers to your account.</p>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default Home;