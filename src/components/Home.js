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
                    <p class="slogan">"Quality sitters <br /> on the fly"</p>

                    {authenticated ? (
                        <div className="links">
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
                        <h2>Lightning Bug Babysitter is the world’s leading platform. <br /> Join our elite team of Lightning Bug Babysitting and help people.</h2>

                    </div>
                </div>
            </header>
            <div id="content">
                <div className="features">
                    <section className="app">
                        <h3> Augmented reality app</h3>
                        <p> Ready, set, download. Get weather and air traffic updates, directions, and 24/7 support.</p>
                    </section>
                    <section className="schedule">
                        <h3> Be Your Own Boss</h3>
                        <p> Join the Lightning Bug Sitters babysitting team — you pick your own schedule.</p>
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