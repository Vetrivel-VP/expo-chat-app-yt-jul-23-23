import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_API_KEY_HERE",
  projectId: "YOUR_API_KEY_HERE",
  storageBucket: "YOUR_API_KEY_HERE",
  messagingSenderId: "YOUR_API_KEY_HERE",
  appId: "YOUR_API_KEY_HERE",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
