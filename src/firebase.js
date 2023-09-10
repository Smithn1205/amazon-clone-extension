// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK-rgF_TK-xggu03JkQVwjGjDJgVRItyI",
  authDomain: "chris-amzon-clone.firebaseapp.com",
  projectId: "chris-amzon-clone",
  storageBucket: "chris-amzon-clone.appspot.com",
  messagingSenderId: "247381404882",
  appId: "1:247381404882:web:0a35f6a39a13444e06910b",
  measurementId: "G-W9HN8P71F9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };