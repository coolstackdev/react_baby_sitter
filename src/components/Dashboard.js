import React from 'react';
import { Link, Map, toJS } from 'react-router-dom';

const EventItem = ({ parentName, eventEndDate, eventPrice }) => (
    <div className="row">
        <div className="cell name">{parentName}</div>
        <div className="cell date">{eventEndDate}</div>
        <div className="cell price">${eventPrice}</div>
    </div>
)

const Dashboard = ({
    userData,
    eventsData,
    authenticated,
    onLogout

}) => {

    const eventItems = eventsData.map(
        event => {
            const { key, parentName, eventEndDate, eventPrice } = event;
            return (
                <EventItem
                    key={key}
                    parentName={parentName}
                    eventEndDate={eventEndDate}
                    eventPrice={eventPrice}
                />
            )
        }
    )

    return (
        <div>
            <header>
                <div id="top">
                    <Link className="rocketrides" to="/"></Link>
                    <div className="links">
                        <Link to="/dashboard">Dashboard</Link>
                        <a onClick={onLogout}>Logout</a>
                    </div>
                </div>
                <div className="user">
                    <div className="block profile">
                        <div className="photo"></div>
                        <p>
                            Member Since {userData.created_at}
                        </p>
                        <h1> {userData.firstname} </h1>
                        <div className="rating"></div>
                    </div>
                    <div className="block week">
                        <p> This Week</p>
                        <h1> ${userData.earnMoneyCurrentWeek} </h1>
                        <h2> {userData.eventCount} Rides</h2>
                    </div>
                    <div className="block available">
                        <p> Your Balance</p>
                        <h1> ${userData.balance}</h1>
                        <h2> ${userData.available} Available</h2>
                    </div>
                    <div className="block stripe">
                        <Link className="button" to="/transfers">View Transfers</Link>
                        <Link className="button form_button" to="/payout">Pay Out Now</Link>
                    </div>
                </div>
            </header >
            <div id="content">
                <section className="rides">
                    <h4>Recent Rides</h4>
                    <div className="list">
                        {eventItems}
                    </div>
                </section>
            </div>
        </div >
    )
}

export default Dashboard;