import firebase from 'firebase/compat/app';
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR58NYQ8FF-RpIr0jQrh-8t-LIax916JU",
  authDomain: "stud-dy.firebaseapp.com",
  projectId: "stud-dy",
  storageBucket: "stud-dy.appspot.com",
  messagingSenderId: "970455073051",
  appId: "1:970455073051:web:36ec14c41b85c88551d3be",
  measurementId: "G-LBY6ZLVR98"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;