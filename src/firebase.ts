
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzmNr_PSFwKlpIx6CSFKawKx4-s-C0Zxc",
    authDomain: "penne-wedding.firebaseapp.com",
    databaseURL: "https://penne-wedding-default-rtdb.firebaseio.com",
    projectId: "penne-wedding",
    storageBucket: "penne-wedding.appspot.com",
    messagingSenderId: "128474181333",
    appId: "1:128474181333:web:96185cde796f55cebffc5c"
};

const firebaseApp = initializeApp(firebaseConfig)

export const firestore = getFirestore(firebaseApp)
