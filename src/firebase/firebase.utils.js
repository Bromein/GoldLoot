import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKMxOeZS5OnCc1k3XX7uz81Fv4Eygs238",
  authDomain: "golddb-7279e.firebaseapp.com",
  databaseURL: "https://golddb-7279e.firebaseio.com",
  projectId: "golddb-7279e",
  storageBucket: "",
  messagingSenderId: "316806696623",
  appId: "1:316806696623:web:8000b234289c767d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //checking if there's data in the store if not, try to create it
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
