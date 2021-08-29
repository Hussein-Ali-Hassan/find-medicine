import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAj4G2799xjHm5svOlrwp-6jTvIl2agP_E",
  authDomain: "medicine-abfff.firebaseapp.com",
  projectId: "medicine-abfff",
  storageBucket: "medicine-abfff.appspot.com",
  messagingSenderId: "783550517561",
  appId: "1:783550517561:web:1b376c303334c0c21d58e8",
});
export default firebaseApp;

import { getFirestore } from "firebase/firestore";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
} from "firebase/firestore";

const db = getFirestore();

export { db, collection, query, orderBy, getDocs, addDoc };

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export { getStorage, ref, uploadBytesResumable, getDownloadURL };
