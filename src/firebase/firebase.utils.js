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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error in creating users', e.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
