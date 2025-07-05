// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc
} from 'firebase/firestore'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhFbPjEVejFocItHyT82ajffZhgGOvHUw",
  authDomain: "faradis-da8f7.firebaseapp.com",
  projectId: "faradis-da8f7",
  storageBucket: "faradis-da8f7.appspot.com",
  messagingSenderId: "194842093542",
  appId: "1:194842093542:web:ac940141a22ed7b9675827",
  measurementId: "G-EZLWEBFG1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: 'faradis'}) => {
    if (!userAuth) return ;
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }
    return userDocRef;   
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword (auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword (auth, email, password)
}