import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD68zfC-QmCdZ2Sb5OdefVf-jp6m-uJHSQ",
    authDomain: "grocerystore-73d98.firebaseapp.com",
    databaseURL: "https://grocerystore-73d98-default-rtdb.firebaseio.com",
    projectId: "grocerystore-73d98",
    storageBucket: "grocerystore-73d98.appspot.com",
    messagingSenderId: "732806035838",
    appId: "1:732806035838:web:a50c63d0b6d559b7cc1b2f"
  };
  
  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage};