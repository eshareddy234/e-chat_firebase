import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyF3yAbllOBTAyCgf2xnhHAHmhq49zEmA",
  authDomain: "e-chat-51be8.firebaseapp.com",
  projectId: "e-chat-51be8",
  storageBucket: "e-chat-51be8.appspot.com",
  messagingSenderId: "958000781755",
  appId: "1:958000781755:web:f0dc24eab7f12ce3e04c9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
