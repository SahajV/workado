import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
