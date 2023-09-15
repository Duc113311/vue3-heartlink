import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


// Config
const firebaseConfig = {
  apiKey: "AIzaSyCRl-TXFH_pkwGm3EIHgqdqSD16BbMQvug",
  authDomain: "heartlink-dating-project.firebaseapp.com",
  databaseURL: "https://heartlink-dating-project-default-rtdb.firebaseio.com",
  projectId: "heartlink-dating-project",
  storageBucket: "heartlink-dating-project.appspot.com",
  messagingSenderId: "927206952114",
  appId: "1:927206952114:web:d2c684a42d3e37a1d88dab",
  measurementId: "G-Y8KBPQ1WPP",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStoreCore = getFirestore(app);


export default {
  fireStoreCore,
  collection,
  getDocs,
}
