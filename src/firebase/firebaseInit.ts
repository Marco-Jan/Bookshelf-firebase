// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";





// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAo--NfO4djLGdwD0LYKut_Vf-XeJGs6I",
    authDomain: "bookshelf-2-0-92549.firebaseapp.com",
    projectId: "bookshelf-2-0-92549",
    storageBucket: "bookshelf-2-0-92549.appspot.com",
    messagingSenderId: "814189133391",
    appId: "1:814189133391:web:7af39d3c20835a85ef743a"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


const querySnapshot = await getDocs(collection(db, 'books'));
querySnapshot.forEach((doc) => {
    doc.data()
   // console.log(doc.id, '=>', doc.data);


});


 