// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyAcJG6jHdn4rO_L8Db1CaZpXXcYxVoaUxE",
  authDomain: "lsetf-project-acc1d.firebaseapp.com",
  projectId: "lsetf-project-acc1d",
  storageBucket: "lsetf-project-acc1d.appspot.com",
  messagingSenderId: "1083328198925",
  appId: "1:1083328198925:web:d12908386086abd4df9844",
  measurementId: "G-DCYW2CSNK3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
