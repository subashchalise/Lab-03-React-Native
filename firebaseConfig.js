import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChT3uDwKHvP7y-lRLosVkwEgmq5gfeuGc",
  authDomain: "lab4-20a98.firebaseapp.com",
  projectId: "lab4-20a98",
  storageBucket: "lab4-20a98.appspot.com",
  messagingSenderId: "633834836869",
  appId: "1:633834836869:web:3919b94ead4cad262d2aec",
};

const firebaseApp = () => initializeApp(firebaseConfig);

if (getApps().length < 1) {
  firebaseApp();
}

const db = getFirestore(firebaseApp());

export { db };
