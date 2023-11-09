// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFP3NcJGO0C0bKVp3XxXqKAwDwXx-v6-o",
  authDomain: "culturehub-8c637.firebaseapp.com",
  projectId: "culturehub-8c637",
  storageBucket: "culturehub-8c637.appspot.com",
  messagingSenderId: "672454536320",
  appId: "1:672454536320:web:7364a4287f451fcf16ca65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);