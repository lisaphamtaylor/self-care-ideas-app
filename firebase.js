// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export default firebase;
