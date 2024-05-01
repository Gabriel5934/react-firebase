import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// TODO Add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBDANtlOKCj36Doj5EfOjyhhphbwSvTUHE",
  authDomain: "odd-one-61da7.firebaseapp.com",
  projectId: "odd-one-61da7",
  storageBucket: "odd-one-61da7.appspot.com",
  messagingSenderId: "488579380285",
  appId: "1:488579380285:web:76ae262f5ba25418d92654",
  measurementId: "G-GG1MWYX93X",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
