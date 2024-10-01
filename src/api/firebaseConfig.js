// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCCDjJhoLTZ3q0WKDql7IHtfvlZgta42-4",
  authDomain: "m2s-xgmao.firebaseapp.com",
  projectId: "m2s-xgmao",
  storageBucket: "m2s-xgmao.appspot.com",
  messagingSenderId: "700339512295",
  appId: "1:700339512295:web:072310ff03684ebc7f1342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export {auth, db, storage}