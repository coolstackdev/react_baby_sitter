import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { config } from '../config';
import * as eventActions from '../store/modules/events';

class Payout extends Component {

    async redirectPage(url, data) {
        const response = await axios.post(url, data);
        console.log(response);

        if (response.data.success == 1) {
            this.props.history.push('/dashboard');
        } else {
            alert(response.data.msg);
            this.props.history.push("/");
        }
    }

    componentWillMount() {
        const uid = localStorage.getItem('uid');
        this.redirectPage(config.firebasePayout, { uid: uid });
    }

    render() {
        return null;
    }
}

export default connect(
    (dispatch) => ({
        EventActions: bindActionCreators(eventActions, dispatch)
    })
)(Payout);
