// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQPICyNO4q5pqIjdXP0vkzMSaEY_YB_Uk",
  authDomain: "instagram-clone-29d53.firebaseapp.com",
  projectId: "instagram-clone-29d53",
  storageBucket: "instagram-clone-29d53.appspot.com",
  messagingSenderId: "683168708858",
  appId: "1:683168708858:web:e28719cfc1099bc3697143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
