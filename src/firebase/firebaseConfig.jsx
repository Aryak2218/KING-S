// src/firebase/firebaseconfig.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGl4-cP2H3zwiRZMshawV7l-V9DIaWIqo",
  authDomain: "kingspart-2df17.firebaseapp.com",
  projectId: "kingspart-2df17",
  storageBucket: "kingspart-2df17.appspot.com", 
  messagingSenderId: "60394630484",
  appId: "1:60394630484:android:44f6536a3222ba31c22cc1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
