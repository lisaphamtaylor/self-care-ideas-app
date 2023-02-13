import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();
let uid = `default`;
let username = `default`;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    uid = user.uid;
    username = user.displayName;
  } else {
    // User is signed out
    // ...
  }
});

export { uid };
