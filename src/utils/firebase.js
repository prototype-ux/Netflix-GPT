// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQug4P6-Kus3ue00IhXW4brO12YU4ESQ",
  authDomain: "netflix-gpt-6ebaf.firebaseapp.com",
  projectId: "netflix-gpt-6ebaf",
  storageBucket: "netflix-gpt-6ebaf.appspot.com",
  messagingSenderId: "990169607471",
  appId: "1:990169607471:web:74318395c89187349cc5da",
  measurementId: "G-HSVSWD0DJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();