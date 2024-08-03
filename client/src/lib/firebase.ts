
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore/lite";

import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBtRC4JNyAZ5wWO_CnLS1BUyKq8phy7hc0",
  authDomain: "khalid-107ce.firebaseapp.com",
  projectId: "khalid-107ce",
  storageBucket: "khalid-107ce.appspot.com",
  messagingSenderId: "198224520295",
  appId: "1:198224520295:web:cae349230added822860c2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const db = getFirestore()
 export const storage = getStorage()
