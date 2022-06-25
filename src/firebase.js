import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC33RMgRiL3wfm489CnTNZ1QdbLshCQKSc",
    authDomain: "linkedin-4eda4.firebaseapp.com",
    projectId: "linkedin-4eda4",
    storageBucket: "linkedin-4eda4.appspot.com",
    messagingSenderId: "661892943428",
    appId: "1:661892943428:web:99e444ea9ed8be8a437611"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export  { db, auth };
  