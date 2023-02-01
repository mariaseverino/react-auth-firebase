import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJ7UBKMx7UkilFee2vGMDLtsUhRo7-eUY",
    authDomain: "auth-f27f6.firebaseapp.com",
    projectId: "auth-f27f6",
    storageBucket: "auth-f27f6.appspot.com",
    messagingSenderId: "67376795988",
    appId: "1:67376795988:web:78a1e14aeba134ca91b8c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
