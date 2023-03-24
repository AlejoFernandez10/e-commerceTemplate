import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB-QDthFLzJTur3AuS32FnWDNFeb7shfE",
  authDomain: "e-commercetemplate-db4d7.firebaseapp.com",
  projectId: "e-commercetemplate-db4d7",
  storageBucket: "e-commercetemplate-db4d7.appspot.com",
  messagingSenderId: "811853247189",
  appId: "1:811853247189:web:9f28f54c8188b41e27685c",
  measurementId: "G-ZYP14WM4FB"
};

// Initialize Firebase
initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
