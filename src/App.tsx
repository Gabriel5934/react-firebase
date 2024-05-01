import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

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

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
