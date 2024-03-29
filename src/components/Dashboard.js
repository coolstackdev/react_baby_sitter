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

    if (eventsData != null) {
        var eventItems = eventsData.map(
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
    }
    return (
        <div>
            <header>
                <div id="top">
                    <Link className="rocketrides" to="/"></Link>
                    <p className="slogan">"Quality sitters <br /> on the fly"</p>
                    <div className="links dashboard_links">
                        <Link to="/dashboard">Dashboard</Link>
                        <a onClick={onLogout}>Logout</a>
                    </div>
                </div>
                <div className="user intro">
                    <div className="block profile">
                        <div className="photo"></div>
                        <p>
                            Member Since {userData.created_at}
                        </p>
                        <h1> {userData.firstname} </h1>
                        {/* <div className="rating"></div> */}
                    </div>
                    <div className="block week">
                        <p> This Week</p>
                        <h1> ${userData.earnMoneyCurrentWeek} </h1>
                        <h2> {userData.eventCount} Babysitting Events</h2>
                    </div>
                    <div className="block available">
                        <p> Pending Balance</p>
                        <h1> ${userData.pending}</h1>
                        <p> Available Balance</p>
                        <h1> ${userData.available}</h1>
                    </div>
                    <div className="block stripe">
                        <Link className="button btn_view_transfer" to="/transfers">View Transfers</Link>
                        {userData.available > 0 ? (
                            <Link className="button form_button btn_payout" to="/payout">Pay Out Now</Link>
                        ) : (
                                <Link className="button form_button btn_payout" to="#" disabled>Pay Out Now</Link>
                            )}
                    </div>
                </div>
            </header >
            <div id="content">
                <section className="rides">
                    <h4>Recent Babysitting Events</h4>
                    {eventItems ? (
                        <div className="list">
                            {eventItems}
                        </div>) : (
                            <div className="list">
                            </div>
                        )
                    }
                </section>
            </div>
        </div >
    )
}

export default Dashboard;