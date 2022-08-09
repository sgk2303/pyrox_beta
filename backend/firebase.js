// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZP8Ul2_7ty2T10nyeXbUdpJxN2-_J1R4",
  authDomain: "goenvi-pyro.firebaseapp.com",
  projectId: "goenvi-pyro",
  storageBucket: "goenvi-pyro.appspot.com",
  messagingSenderId: "1093662819571",
  appId: "1:1093662819571:web:f456453b8310efc54f2386",
  measurementId: "G-1DMNW0FHZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);