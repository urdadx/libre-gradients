// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcMe-vkgIFuayUrd8C_vZAXcCOP2LhRg0",
  authDomain: "user-uploads-v1.firebaseapp.com",
  projectId: "user-uploads-v1",
  storageBucket: "user-uploads-v1.appspot.com",
  messagingSenderId: "889781799920",
  appId: "1:889781799920:web:b77c52f79c9eb4ef626b35"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


export default app;