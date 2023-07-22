import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWr_oXD6ma1dNw58lr2A3NcFT7SPXos5w",
  authDomain: "yt-chat-application.firebaseapp.com",
  projectId: "yt-chat-application",
  storageBucket: "yt-chat-application.appspot.com",
  messagingSenderId: "23639541169",
  appId: "1:23639541169:web:7e78dba1342731b4eca990",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
