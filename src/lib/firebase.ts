import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Provided Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyBxvhTuQhfKeIgybiRQoca7btPdSO5oFag",
  authDomain: "matur-3f6cc.firebaseapp.com",
  projectId: "matur-3f6cc",
  storageBucket: "matur-3f6cc.firebasestorage.app",
  messagingSenderId: "624068510753",
  appId: "1:624068510753:web:c97f506d60ea3c09c08f60",
  measurementId: "G-Y6TQQEQ6DL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


