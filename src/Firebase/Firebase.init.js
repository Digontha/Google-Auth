// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGu8ACefORUqMEgbTFAHJFbzHiOAtqV8",
  authDomain: "simple-react-auth-7efe3.firebaseapp.com",
  projectId: "simple-react-auth-7efe3",
  storageBucket: "simple-react-auth-7efe3.appspot.com",
  messagingSenderId: "960993267023",
  appId: "1:960993267023:web:b9745fe5d0ae74dc97c93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;