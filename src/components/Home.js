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

                    {authenticated ? (
                        <div className="links">
                            <Link to="/dashboard">Dashboard</Link>
                            <a onClick={onLogout}>Logout</a>
                        </div>
                    ) : (
                            <Link className="arrow" to="/login">Login</Link>
                        )}
                </div>
                <div className="intro">
                    <div className="pilots">
                        <h1>Get ready for take off.</h1>
                        <h2>Babysitter is the world’s leading air travel platform. <br /> Join our elite team of pilots and help people travel faster than ever.</h2>
                        <a className="button" href="/authorize">Setup Payment</a>
                    </div>
                </div>
            </header>
            <div id="content">
                <div className="features">
                    <section className="schedule">
                        <h3> Fly when you want</h3>
                        <p> You can be a part of the Babysitter pilots team anytime—you pick your own schedule. Fly as little or as much as you want.</p>
                    </section>
                    <section className="earnings">
                        <h3> Earn more with each trip</h3>
                        <p> Trip fares increase with time and distance. Cash out whenever you want and get instant transfers to your account.</p>
                    </section>
                    <section className="app">
                        <h3> Augmented reality app</h3>
                        <p> Ready, set, download. Get weather and air traffic updates, directions, and 24/7 support. Don’t have a smartphone? No problem.</p>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default Home;