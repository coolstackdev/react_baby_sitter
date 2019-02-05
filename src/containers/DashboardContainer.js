import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../store/modules/user';
import * as eventActions from '../store/modules/events';

class DashboardContainer extends Component {

    componentWillReceiveProps(props) {
        const currentUser = props.userData;
        if (currentUser.stripe_id == '') {
            props.history.push("/authorize");
        }
    }

    handleLogout = () => {
        const { UserActions } = this.props;
        UserActions.requestLogout();
    }

    render() {
        const { userData, eventsData, authenticated } = this.props;
        const { handleLogout } = this;

        return (
            <Dashboard
                authenticated={authenticated}
                userData={userData}
                eventsData={eventsData}
                onLogout={handleLogout}
            />
        )
    }
}

export default connect(
    (state) => ({
        userData: state.events.get('userData'),
        eventsData: state.events.get('events'),
        authenticated: state.user.get('authenticated')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        EventActions: bindActionCreators(eventActions, dispatch)
    })
)(DashboardContainer);
