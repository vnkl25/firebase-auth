// public/firebase-config.js
// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXGRZP3-W7XuAZQS4aoKjagG6tE5LAj0w",
    authDomain: "fir-auth-f29d7.firebaseapp.com",
    projectId: "fir-auth-f29d7",
    storageBucket: "fir-auth-f29d7.firebasestorage.app",
    messagingSenderId: "522543650921",
    appId: "1:522543650921:web:bea6a95201e6537dd22af8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
