import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB6y5oc_rIoupkhRCu09euQBWua5SYR9PU",
    authDomain: "lightning-bug-sitters.firebaseapp.com",
    databaseURL: "https://lightning-bug-sitters.firebaseio.com",
    projectId: "lightning-bug-sitters",
    storageBucket: "lightning-bug-sitters.appspot.com",
    messagingSenderId: "866362667815"
};

const app = firebase.initializeApp(config);

export default app;