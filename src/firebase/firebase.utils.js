import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDHm-WTdMHUUeV05P4nhoxNQQR5_jvCCBs',
  authDomain: 'mwek-db.firebaseapp.com',
  projectId: 'mwek-db',
  storageBucket: 'mwek-db.appspot.com',
  messagingSenderId: '255033198933',
  appId: '1:255033198933:web:069da952ab6a98f9ee07dc',
  measurementId: 'G-VCD6RPQS2M',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
