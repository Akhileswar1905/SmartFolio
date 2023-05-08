// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBM-Xq76w39LYzewTF9t5Sf4GvIKsJEo",
  authDomain: "smartfolio-6fd4c.firebaseapp.com",
  projectId: "smartfolio-6fd4c",
  storageBucket: "smartfolio-6fd4c.appspot.com",
  messagingSenderId: "886302079035",
  appId: "1:886302079035:web:4ae0aee4f88858943a841e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
