import firebase from "firebase/app"
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRTLibL1KL7VMHKF2bIfOkqcPy43ssn0",
  authDomain: "todo-herramientas-app.firebaseapp.com",
  projectId: "todo-herramientas-app",
  storageBucket: "todo-herramientas-app.appspot.com",
  messagingSenderId: "185753229490",
  appId: "1:185753229490:web:bd3dec51d9fb8cde5bd1ab"
};

// Initialiciamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore =() => {
    return firebase.firestore(app)
}