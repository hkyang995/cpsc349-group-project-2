import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/storage';

const config = { 
  apiKey: "AIzaSyCnMwujRshSEADYuUnxc2S79nmF63o2DYY",
  authDomain: "food-fighter.firebaseapp.com",
  databaseURL: "https://food-fighter.firebaseio.com",
  projectId: "food-fighter",
  storageBucket: "food-fighter.appspot.com",
  messagingSenderId: "700541497420",
  appId: "1:700541497420:web:6c0e2c6e0293102c7044e9",
  measurementId: "G-6PYZ9PVXTS"

}
const fire = firebase.initializeApp(config);
// const storage = firebase.storage();

export default fire;
