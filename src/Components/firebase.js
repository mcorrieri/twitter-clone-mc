import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrJUNzmfkd62-vJCdpjyU9EwY1lIR9wMw",
  authDomain: "twitter-clone-mc-38367.firebaseapp.com",
  projectId: "twitter-clone-mc-38367",
  storageBucket: "twitter-clone-mc-38367.appspot.com",
  messagingSenderId: "224870816902",
  appId: "1:224870816902:web:e81acea6e6c1196f788507",
  measurementId: "G-DS4VKKWTM7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
