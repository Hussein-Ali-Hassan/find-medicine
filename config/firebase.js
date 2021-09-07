import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
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
