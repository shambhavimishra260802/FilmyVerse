import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZMBoYZSBmmXI0blKiDjFdgbHTd5n12is",
  authDomain: "filmyverse-620bb.firebaseapp.com",
  projectId: "filmyverse-620bb",
  storageBucket: "filmyverse-620bb.appspot.com",
  messagingSenderId: "135644208875",
  appId: "1:135644208875:web:d7af202916b554efaea8ae"
};
const app = initializeApp(firebaseConfig);
export const db= getFirestore (app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
