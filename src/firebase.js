import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhgs5AAEJFIEEdy9dBE4815rC_ruklH70",
  authDomain: "chat-app-4ecbe.firebaseapp.com",
  projectId: "chat-app-4ecbe",
  storageBucket: "chat-app-4ecbe.appspot.com",
  messagingSenderId: "53799789492",
  appId: "1:53799789492:web:c208a4f1b2a3b86ffc08e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
