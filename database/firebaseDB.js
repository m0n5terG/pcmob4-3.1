import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDodEYp_Ys0ko7Qw4rU4jPrzxsWkuVXnTQ",
  authDomain: "pcmob4-3.firebaseapp.com",
  projectId: "pcmob4-3",
  storageBucket: "pcmob4-3.appspot.com",
  messagingSenderId: "1022696686084",
  appId: "1:1022696686084:web:793bdbff81ffbff8272b51"
};

firebase.initializeApp(firebaseConfig);
export default firebase;