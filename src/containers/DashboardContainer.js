import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../store/modules/user';
import * as eventActions from '../store/modules/events';

class DashboardContainer extends Component {

    handleLogout(e) {
        const { UserActions } = this.props;
        UserActions.requestLogout();
    }

    render() {
        const { handleLogout } = this.props;

        return (
            <Dashboard
                events={null}
                onLogout={handleLogout}
            />
        )
    }
}

export default connect(
    (state) => ({
        eventsData: state.event.eventsData
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        EventActions: bindActionCreators(eventActions, dispatch)
    })
)(DashboardContainer);