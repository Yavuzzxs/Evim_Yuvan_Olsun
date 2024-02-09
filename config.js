import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";



export const firebaseConfig = {
    apiKey: "*******************",
    authDomain: "evim-yuvan-olsun.firebaseapp.com",
    projectId: "evim-yuvan-olsun",
    storageBucket: "evim-yuvan-olsun.appspot.com",
    messagingSenderId: "1015985373400",
    appId: "1:1015985373400:web:746f2a50c4bda13b63d7ad",
    measurementId: "G-MHJEN8QHR4"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
