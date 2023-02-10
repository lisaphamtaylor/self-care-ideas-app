// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFOAAxoMNGDYsDD0QouY5caMDR0TlUrHk',
  authDomain: 'self-care-ideas-app.firebaseapp.com',
  projectId: 'self-care-ideas-app',
  storageBucket: 'self-care-ideas-app.appspot.com',
  messagingSenderId: '358291905855',
  appId: '1:358291905855:web:1b19e4fb6f1abb4aa0078a',
};

// Initialize Firebase
// !firebaseConfig.apps.length
//   ? firebaseConfig.initializeApp(firebaseConfig)
//   : firebase.app();

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default firebase;
