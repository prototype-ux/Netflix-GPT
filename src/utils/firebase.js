// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3YlcJBf3ox8RHmNxA6cIgEAubSqCk3NE",
  authDomain: "netflixfinal-ad9e0.firebaseapp.com",
  projectId: "netflixfinal-ad9e0",
  storageBucket: "netflixfinal-ad9e0.appspot.com",
  messagingSenderId: "113163840518",
  appId: "1:113163840518:web:691c7ecb423e967bf4e787",
  measurementId: "G-C8MPFN4PDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKriFRIsY9cX-1IRNYm7ZfQ0Jv5I_5-s",
  authDomain: "netflix-2024-clone.firebaseapp.com",
  projectId: "netflix-2024-clone",
  storageBucket: "netflix-2024-clone.appspot.com",
  messagingSenderId: "1041327791842",
  appId: "1:1041327791842:web:1127e94b9d8217f7c708bb",
  measurementId: "G-E41J8TLRP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();


import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDXO0HlVCbKbx4n11uWux1aHYtiaWw8SrU",
  authDomain: "neflix-database-c8096.firebaseapp.com",
  projectId: "neflix-database-c8096",
  storageBucket: "neflix-database-c8096.appspot.com",
  messagingSenderId: "747185547995",
  appId: "1:747185547995:web:5b503c4d125edf79fc3afe",
  measurementId: "G-XFHNM5F3ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();*/