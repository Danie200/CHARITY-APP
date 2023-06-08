// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNHN68G-4bNMZcK0LbgZbOI5SVv0VgG0",
  authDomain: "charityapp-3d294.firebaseapp.com",
  projectId: "charityapp-3d294",
  storageBucket: "charityapp-3d294.appspot.com",
  messagingSenderId: "225752546093",
  appId: "1:225752546093:web:53bef8bcedf2f1c7f8b1a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth}
export {db}