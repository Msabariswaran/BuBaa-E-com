// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCybgJOhA33Uyg0ynhdu4Fflc4mdmE222o",
  authDomain: "bubba-e-com.firebaseapp.com",
  projectId: "bubba-e-com",
  storageBucket: "bubba-e-com.appspot.com",
  messagingSenderId: "1026905049411",
  appId: "1:1026905049411:web:66c5fd5f258c46faa587f6",
  measurementId: "G-5KG82NR2MS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const FirebaseContext = createContext({
//   app: app,
//   auth: auth,
//   db: db
// });
export { app, auth, db };

// Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
