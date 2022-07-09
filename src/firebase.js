// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDroCB6wyPUJ3B5ySNA8sMzcKJ2-lKhRNA",
  authDomain: "volunteerfinder-8163e.firebaseapp.com",
  projectId: "volunteerfinder-8163e",
  storageBucket: "volunteerfinder-8163e.appspot.com",
  messagingSenderId: "543305848667",
  appId: "1:543305848667:web:f2dd82bfc350cab2bbec7e",
  measurementId: "G-FRPEXQN1R5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async() => {
//     try {
//         const res = await signInWithPopup(auth, googleProvider);
//         const user = res.user;
//         const q = query(co)
//     }
// }

const logInWithEmailAndPassword = async (email, password) =>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully");

    } catch(err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (name, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("successful registratin");

        const docRef = await addDoc(collection(db, "users"), {
          name,
          email,
        });

        console.log("Document written with ID: ", docRef.id);
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);  
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout
};

