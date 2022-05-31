import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAfY4zHR8Aenu1ji8WUXvkcVOnxAWL3Q1M",
  authDomain: "reservesocialapp.firebaseapp.com",
  projectId: "reservesocialapp",
  storageBucket: "reservesocialapp.appspot.com",
  messagingSenderId: "773206829548",
  appId:  "1:773206829548:web:a1b005dc2482f59ff1f8c9",
  measurementId: "G-GY78EE84VY",
};

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
 
  const storage = app.storage();




  export { db, auth, storage };
