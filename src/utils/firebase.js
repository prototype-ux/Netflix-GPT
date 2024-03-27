// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu3WxhAMUQN05ISMU_p_oYrMYVvJGa6RQ",
  authDomain: "miniwatch.firebaseapp.com",
  projectId: "miniwatch",
  storageBucket: "miniwatch.appspot.com",
  messagingSenderId: "701590044585",
  appId: "1:701590044585:web:be2a3a1f230cf7ed560eb8",
  measurementId: "G-HS0XQSP0R7"
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