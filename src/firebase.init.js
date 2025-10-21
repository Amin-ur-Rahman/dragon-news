// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZs0MyHcN2-8_7kA_gAZz7fRHYQwpnK6c",
  authDomain: "dragon-news-auth-7645f.firebaseapp.com",
  projectId: "dragon-news-auth-7645f",
  storageBucket: "dragon-news-auth-7645f.firebasestorage.app",
  messagingSenderId: "549702239971",
  appId: "1:549702239971:web:095c373b5087101f7da7d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
