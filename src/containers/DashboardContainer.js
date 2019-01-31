import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../store/modules/user';
import * as eventActions from '../store/modules/events';

class DashboardContainer extends Component {

    handleLogout = () => {
        const { UserActions } = this.props;
        UserActions.requestLogout();
    }

    render() {
        const { eventData, authenticated } = this.props;
        const { handleLogout } = this;

        return (
            <Dashboard
                authenticated={authenticated}
                events={eventData}
                onLogout={handleLogout}
            />
        )
    }
}

export default connect(
    (state) => ({
        eventsData: null,
        authenticated: state.user.authenticated
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        EventActions: bindActionCreators(eventActions, dispatch)
    })
)(DashboardContainer);
