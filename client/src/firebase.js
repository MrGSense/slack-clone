import firebase from 'firebase';
import { firebaseConfig } from './config/dev';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
