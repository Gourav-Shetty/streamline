import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCh3AU9E-3hMZ2ssgUNg7Kcny8fnSbFgvs",

  authDomain: "react-movies-f792e.firebaseapp.com",

  projectId: "react-movies-f792e",

  storageBucket: "react-movies-f792e.firebasestorage.app",

  messagingSenderId: "904262724624",

  appId: "1:904262724624:web:c05b40c4bc4256581c6e95",

  measurementId: "G-DMLP406L8X"

};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);