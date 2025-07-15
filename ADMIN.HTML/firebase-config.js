
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDi38gj03rQeoXqilbjaF43rgPAL2vYtwU",
  authDomain: "timi-ecommerce-v2.firebaseapp.com",
  projectId: "timi-ecommerce-v2",
  storageBucket: "timi-ecommerce-v2.firebasestorage.app",
  messagingSenderId: "463474123257",
  appId: "1:463474123257:web:033f324ef4ade6de379d28",
  measurementId: "G-REQ0J6L2C6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp };
