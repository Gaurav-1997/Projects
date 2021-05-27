import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzsUqRTZYPV7kW6vGDIcarU6c4yPPPDX4",
  authDomain: "clone-react-2e572.firebaseapp.com",
  projectId: "clone-react-2e572",
  storageBucket: "clone-react-2e572.appspot.com",
  messagingSenderId: "318776482419",
  appId: "1:318776482419:web:d62bb1a5cf72e40ed02806"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};