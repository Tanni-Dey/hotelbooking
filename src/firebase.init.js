// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlS2IEIFJfyuKCe5JYK42iP49tVvAbqAg",
    authDomain: "hotel-booking-212b0.firebaseapp.com",
    projectId: "hotel-booking-212b0",
    storageBucket: "hotel-booking-212b0.appspot.com",
    messagingSenderId: "40429345815",
    appId: "1:40429345815:web:bc1a6cec1f83adcaf39052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;