// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, Database, ref, set, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe7z9vwQCAwPsh40slkGSuy33n6HIexQk",
    authDomain: "coold-199ef.firebaseapp.com",
    databaseURL: "https://coold-199ef.firebaseio.com",
    projectId: "coold-199ef",
    storageBucket: "coold-199ef.appspot.com",
    messagingSenderId: "562375196521",
    appId: "1:562375196521:web:caba110cde910ca12e47f8",
    measurementId: "G-4XD6GGKRF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// var otherDatabase = app.database(app);


const db = getDatabase(app)

console.log(child("/"))

const hello = () => {
    // set(db,)
    // const storage = window.localStorage
    // const data = window.navigator

}
hello();

