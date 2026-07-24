import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1UgMmkjVIXUqmfPT_vDsP0AKZSk6yAhM",
  authDomain: "shopnest-90081.firebaseapp.com",
  projectId: "shopnest-90081",
  storageBucket: "shopnest-90081.firebasestorage.app",
  messagingSenderId: "88272757561",
  appId: "1:88272757561:web:8447286d10123ca670fee8",
  measurementId: "G-19LWQH3LWT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();