// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJqYhseyN-s6s79WxFlljQlKNSkMRkptU",
  authDomain: "cronometros-grupos.firebaseapp.com",
  projectId: "cronometros-grupos",
  storageBucket: "cronometros-grupos.firebasestorage.app",
  messagingSenderId: "886340826784",
  appId: "1:886340826784:web:63897dd9170825bc15fbc5",
  measurementId: "G-KD241WKQZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Hacemos accesible la DB y las funciones globalmente
window.db = db;
window.ref = ref;
window.set = set;
window.update = update;
window.onValue = onValue;