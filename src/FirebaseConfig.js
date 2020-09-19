import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAjrc_AQxhEZ1nM6isrElh6wZbfZJYoAdE",
  authDomain: "workado-bea8b.firebaseapp.com",
  databaseURL: "https://workado-bea8b.firebaseio.com",
  projectId: "workado-bea8b",
  storageBucket: "workado-bea8b.appspot.com",
  messagingSenderId: "881879375948",
  appId: "1:881879375948:web:4cb2caa410781a7ba814e9",
  measurementId: "G-P7XY1KJ23Q"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;