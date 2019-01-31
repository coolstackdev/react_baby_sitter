import axios from 'axios';
import app from '../components/Firebase/firebase';

export default {
    user: {
        requestEvents: uid => {
            console.log(uid);
        },
        requestLogout: () => {
            app.auth().signOut();
            console.log('api logout request');
        }
    }
};