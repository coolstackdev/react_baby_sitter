import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../store/modules/user';

class HomeContainer extends Component {

    // componentDidMount() {
    //     const search = this.props.location.search;
    //     const params = new URLSearchParams(search);
    //     const uid = params.get('uid');

    //     localStorage.setItem('uid', uid);
    // }

    handleLogout = () => {
        const { UserActions } = this.props;
        UserActions.requestLogout();
    }

    render() {
        const { authenticated } = this.props;
        const { handleLogout } = this;

        console.log('Homecontainer authentication: ' + authenticated);

        return (
            <Home
                authenticated={authenticated}
                onLogout={handleLogout}
            />
        )
    }
}

export default connect(
    ({ user }) => ({
        authenticated: user.get('authenticated')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HomeContainer);