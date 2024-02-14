// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-KjdmSZcuTWh4AK1MTjgKwMCIyOpaXkM",
  authDomain: "login-788e6.firebaseapp.com",
  projectId: "login-788e6",
  storageBucket: "login-788e6.appspot.com",
  messagingSenderId: "585262111545",
  appId: "1:585262111545:web:20f8f27204f1e2361166e8",
  measurementId: "G-BBLT2N43RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);