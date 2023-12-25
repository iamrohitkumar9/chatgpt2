// Import the functions you need from the SDKs you need
import { getApp , getApps , initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw73TtUceCRYqEIUrO848G3cMmp4zW8QE",
  authDomain: "chatgpt34-474cc.firebaseapp.com",
  projectId: "chatgpt34-474cc",
  storageBucket: "chatgpt34-474cc.appspot.com",
  messagingSenderId: "958983406942",
  appId: "1:958983406942:web:54f95f09c1a38b0148bbcf",
  measurementId: "G-GVF0BF44MQ"
};

// Initialize Firebase
const app = getApps().length ? getApp() :initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};
