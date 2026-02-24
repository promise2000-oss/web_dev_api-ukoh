import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFEPi1VAPpA8bhGwrUTUCtnq4aFmky5Y0",
  authDomain: "echoboard-6bd0b.firebaseapp.com",
  projectId: "echoboard-6bd0b",
  storageBucket: "echoboard-6bd0b.firebasestorage.app",
  messagingSenderId: "275010341860",
  appId: "1:275010341860:web:df172bba566219f33695f1",
  measurementId: "G-EW55J1KH69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
