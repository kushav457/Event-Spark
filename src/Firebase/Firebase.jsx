
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
    //YOUR firebase data
    //YOUR KEY
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
