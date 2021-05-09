import firebase from "firebase/app";

import "@firebase/storage";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeczc6YcYXywY7VduUiIo2qs88cLXbijU",
  authDomain: "myweb-fc31d.firebaseapp.com",
  projectId: "myweb-fc31d",
  storageBucket: "myweb-fc31d.appspot.com",
  messagingSenderId: "1056327626673",
  appId: "1:1056327626673:web:804057cbca12d34bff9790",
  measurementId: "G-CVXZYZ8LPT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
