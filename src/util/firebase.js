import firebase from 'firebase/app';
import "firebase/auth"

const config = {
  apiKey: "AIzaSyByo2RBZ34P3ecLu8L5fBaewQtVWP5Mjng",
  authDomain: "project2frontendreact.firebaseapp.com",
  databaseURL: "https://project2frontendreact.firebaseio.com",
  projectId: "project2frontendreact",
  storageBucket: "project2frontendreact.appspot.com",
  messagingSenderId: "5349368718",
  appId: "1:5349368718:web:7ab6a90a2027f1ca7cfadf",
  measurementId: "G-17MX73STBZ"
};

const fire = firebase.initializeApp(config);
export default fire;
