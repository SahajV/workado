import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyB6MAd2oa_2Z0LVW1AiXy56YR03Y9qop2A",
    authDomain: "educado-organizer.firebaseapp.com",
    databaseURL: "https://educado-organizer.firebaseio.com",
    projectId: "educado-organizer",
    storageBucket: "educado-organizer.appspot.com",
    messagingSenderId: "726777273036",
    appId: "1:726777273036:web:af5c5175836efe07904069",
    measurementId: "G-GHG8XP8RK3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, google };