import firebase from 'firebase';
import '@firebase/firestore';
import 'firebase/storage';

const db = firebase.firestore();

export default {db};