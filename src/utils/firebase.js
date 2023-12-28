// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLSs18MBMzX3BVZfO5LEkoum9Z2s9Hwns",
  authDomain: "netflix-gpt-61322.firebaseapp.com",
  projectId: "netflix-gpt-61322",
  storageBucket: "netflix-gpt-61322.appspot.com",
  messagingSenderId: "12716735993",
  appId: "1:12716735993:web:0517cbea9ffecba4aa9128",
  measurementId: "G-QVKDSD6YL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()