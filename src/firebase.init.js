// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChw1d8ekZpxzIOkmME0Wn5ml38d51kXUw",
  authDomain: "ema-jhon-simple-54f61.firebaseapp.com",
  projectId: "ema-jhon-simple-54f61",
  storageBucket: "ema-jhon-simple-54f61.appspot.com",
  messagingSenderId: "824186034111",
  appId: "1:824186034111:web:4c5b0efbb7757db38bb30a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;