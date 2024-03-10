// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHr4fSkCYSbQR5mSDzH3zhFFkgaq_pZJM",
  authDomain: "leo-blogging.firebaseapp.com",
  projectId: "leo-blogging",
  storageBucket: "leo-blogging.appspot.com",
  messagingSenderId: "751102495092",
  appId: "1:751102495092:web:5da122be62fe526a528421",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
