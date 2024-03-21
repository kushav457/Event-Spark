
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT3s7G1WmRVN3OAW_erh3OVddGDZ9Ht2M",
    authDomain: "eventspark-86731.firebaseapp.com",
    projectId: "eventspark-86731",
    storageBucket: "eventspark-86731.appspot.com",
    messagingSenderId: "129487938571",
    appId: "1:129487938571:web:24dc659fae26f65955530e",
    measurementId: "G-HX2EVGNWJC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth() 
let firestore = firebase.firestore()
export const database = {
  users: firestore.collection('users'),
  
  // getTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
}

export const storage = firebase.storage()