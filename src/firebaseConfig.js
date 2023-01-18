import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATOXtoClwhjHz-91I3fX_Ubclys-w4kBk",
    authDomain: "client-app-ffc31.firebaseapp.com",
    projectId: "client-app-ffc31",
    storageBucket: "client-app-ffc31.appspot.com",
    messagingSenderId: "786050753169",
    appId: "1:786050753169:web:4eadfae90ef31eb43f1530",
    measurementId: "G-YVXSFCF81N"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
