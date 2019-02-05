import axios from 'axios';
import app from '../components/Firebase/firebase';
import { config } from '../config';

export default {
    user: {
        requestEvents: uid => {
            return axios.request({
                method: 'post',
                url: config.firebaseGetEvents,
                data: { uid: uid }
            });

        },
        requestLogout: () => {
            app.auth().signOut();
        }
    }
};