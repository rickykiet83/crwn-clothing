import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from 'firebase/auth';

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvfTdgcF2JfK2pllDXEd_0pNomEMhIwA0",
  authDomain: "crwn-clothing-db-aa1c3.firebaseapp.com",
  projectId: "crwn-clothing-db-aa1c3",
  storageBucket: "crwn-clothing-db-aa1c3.appspot.com",
  messagingSenderId: "670652433571",
  appId: "1:670652433571:web:d21e3da3ae3de10d3e2b16"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
