import axios from 'axios';
import app from '../components/Firebase/firebase';

export default {
    user: {
        requestEvents: uid => {
            var userData = {
                'firstname': 'Jane',
                'uid': '123',
                'stripe_id': '',
                'member_since': '2019-01-01',
                'eventCount': '10',
                'earnMoneyCurrentWeek': '12500',
                'balance': '2000',
                'available': '1500'

            };
            var events = [
                {
                    'parentName': 'Carol',
                    'eventEndDate': '2019-02-01',
                    'eventPrice': '50'
                },
                {
                    'parentName': 'Surgel',
                    'eventEndDate': '2019-01-03',
                    'eventPrice': '90'
                },
                {
                    'parentName': 'Michelle',
                    'eventEndDate': '2019-01-24',
                    'eventPrice': '60'
                }
            ];

            var data = {
                'userData': userData,
                'events': events
            }

            return data;
        },
        requestLogout: () => {
            app.auth().signOut();
        }
    }
};