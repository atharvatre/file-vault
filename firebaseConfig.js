// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUOq40X7bG5wVwgNnRJo_04aIjlrDYWSQ",
    authDomain: "filevault-844ba.firebaseapp.com",
    projectId: "filevault-844ba",
    storageBucket: "filevault-844ba.appspot.com",
    messagingSenderId: "801098778540",
    appId: "1:801098778540:web:61b2f5caef9ead68d31c09",
    measurementId: "G-3N5YXDRVSG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);