// src/firebase/Firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6qsR79zQxy1FOqVdPVpFXf1fYYrHwqKo",
    authDomain: "educase-5a810.firebaseapp.com",
    projectId: "educase-5a810",
    storageBucket: "educase-5a810.firebasestorage.app",
    messagingSenderId: "479001774028",
    appId: "1:479001774028:web:264e19f93d574e64433f69",
    measurementId: "G-XQ5S75594P"
};

const app = initializeApp(firebaseConfig);

let analytics;
try {
    analytics = getAnalytics(app);
} catch (e) {
    console.warn("Firebase analytics not initialized", e);
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
