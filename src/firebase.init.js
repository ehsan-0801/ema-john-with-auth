// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyKst7XOYWhsXprbFvKvbmDk2QXKv7z94",
    authDomain: "ema-john-simple-e25d2.firebaseapp.com",
    projectId: "ema-john-simple-e25d2",
    storageBucket: "ema-john-simple-e25d2.appspot.com",
    messagingSenderId: "745481327039",
    appId: "1:745481327039:web:b3126fceb940b412a5910a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;