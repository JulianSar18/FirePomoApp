import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, NextOrObserver, User, UserCredential } from 'firebase/auth';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseDomain = import.meta.env.VITE_FIREBASE_DOMAIN;

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseDomain,
  projectId: "firepomoapp",
  storageBucket: "firepomoapp.appspot.com",
  messagingSenderId: "973344828779",
  appId: "1:973344828779:web:e4eb4a70bedd31b488b02e",
  measurementId: "G-XS5SBEWWJR"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

auth.onAuthStateChanged((user: User | null) => {
  if (user) {
    console.log(user)
  } else {
    console.log('sign out')
  }
})

export { auth }
export default app;