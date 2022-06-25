import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAYjzyBbLBgypOJu4pFWUcTSOuj0tV0wJQ",
  authDomain: "ecommerce-app-with-react-4db63.firebaseapp.com",
  projectId: "ecommerce-app-with-react-4db63",
  storageBucket: "ecommerce-app-with-react-4db63.appspot.com",
  messagingSenderId: "622301989905",
  appId: "1:622301989905:web:03c1045580b36dae45f5b0",
  measurementId: "G-XQT0GC5MMQ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export{auth,fs,storage}
