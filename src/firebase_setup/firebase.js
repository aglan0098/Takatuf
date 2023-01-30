import { initializeApp } from "firebase/app";
import {
    getFirestore, query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWLNyDFnQ-h8c8IMrwWmAkZ4HFBqGpk5M",
    authDomain: "takatuf-1f78a.firebaseapp.com",
    projectId: "takatuf-1f78a",
    storageBucket: "takatuf-1f78a.appspot.com",
    messagingSenderId: "645134886511",
    appId: "1:645134886511:web:890fba1f84d2069490cf9a",
    measurementId: "G-50DV8VJZ5C"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ===================== Auth Functions ====================

// --------- sign in with google
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// --------- sign in with EMAIL
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// --------- Register User with email and pass as TRAINER
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            role: "trainer"
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// --------- Register User with email and pass as COMPANY
const registerWithEmailAndPasswordC = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            role: "company"
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


// --------- LOGOUT
const logout = () => {
    signOut(auth);
};

// ------ get logged in user data
const findUser = async (userEmail) => {
    const collection_ref = collection(db, "users");
    const q = query(collection_ref, where("email", "==", userEmail));
    const doc_refs = await getDocs(q);

    const res = [];
    doc_refs.forEach(user => {
        res.push({
            ...user.data()
        })
    })

    return res[0].role;
}


export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    registerWithEmailAndPasswordC,
    logout,
    findUser,
};