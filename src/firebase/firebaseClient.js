import { initializeApp, getApps } from "firebase/app"

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCff_8TZGrhyOrTZhyzhmYmXKKt2K7qVDg",
    authDomain: "sybel-1a6f9.firebaseapp.com",
    projectId: "sybel-1a6f9",
    storageBucket: "sybel-1a6f9.appspot.com",
    messagingSenderId: "574122178676",
    appId: "1:574122178676:web:ff3df77359fd07aa8ff921",
    measurementId: "G-WPZQ6S4PR4",
    databaseURL: "https://sybel-1a6f9-default-rtdb.firebaseio.com"
};

const firebaseClient = () => {
    if (!getApps().length) {
        initializeApp(FIREBASE_CONFIG);
    }
};

export default firebaseClient;