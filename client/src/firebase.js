// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "learning-app-193ce.firebaseapp.com",
  projectId: "learning-app-193ce",
  storageBucket: "learning-app-193ce.appspot.com",
  messagingSenderId: "1080629266198",
  appId: "1:1080629266198:web:1e354a65def2dae5cd7237"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);