// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzD6F4RW-BSksWcSr2nsaoCtcU6L_KhO8",
  authDomain: "career-counseling-auth.firebaseapp.com",
  projectId: "career-counseling-auth",
  storageBucket: "career-counseling-auth.firebasestorage.app",
  messagingSenderId: "967215316901",
  appId: "1:967215316901:web:6baa79b83b7ac3c2e3724c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
