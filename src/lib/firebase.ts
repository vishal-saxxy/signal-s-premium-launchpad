// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdn1coq2WDffcrjKEa5fU209zZbz5w7cA",
  authDomain: "signal-waitlist.firebaseapp.com",
  projectId: "signal-waitlist",
  storageBucket: "signal-waitlist.firebasestorage.app",
  messagingSenderId: "954124838834",
  appId: "1:954124838834:web:cc5ce992acc7336a5926ab",
  measurementId: "G-V9G4E95CE1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);