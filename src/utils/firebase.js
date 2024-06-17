// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjsblog-426508.firebaseapp.com",
  projectId: "nextjsblog-426508",
  storageBucket: "nextjsblog-426508.appspot.com",
  messagingSenderId: "533360683902",
  appId: "1:533360683902:web:5842c2bd9eb7adedb1212f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
