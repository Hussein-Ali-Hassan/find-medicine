import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj4G2799xjHm5svOlrwp-6jTvIl2agP_E",
  authDomain: "medicine-abfff.firebaseapp.com",
  projectId: "medicine-abfff",
  storageBucket: "medicine-abfff.appspot.com",
  messagingSenderId: "783550517561",
  appId: "1:783550517561:web:1b376c303334c0c21d58e8",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
