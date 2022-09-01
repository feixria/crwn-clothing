import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiWxedGe5HGdtf3O_CkCJqteS7fZxktpw",
  authDomain: "crwn-db-6e10f.firebaseapp.com",
  projectId: "crwn-db-6e10f",
  storageBucket: "crwn-db-6e10f.appspot.com",
  messagingSenderId: "781339505338",
  appId: "1:781339505338:web:ba3e8ee2e6eee3be978883",
  measurementId: "G-Y33DKGXRFD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if the entry does not exist
  if (!snapShot.exists) {
    // creating fields that u want to store in firebase
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase and set default broser language
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
