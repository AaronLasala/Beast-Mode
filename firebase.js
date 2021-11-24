// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfNTdcKKplYrDC8MJYOkHQKQqwqR-rcJk",
  authDomain: "gymchuchu.firebaseapp.com",
  projectId: "gymchuchu",
  storageBucket: "gymchuchu.appspot.com",
  messagingSenderId: "541036200579",
  appId: "1:541036200579:web:0e738cba581627cb68d1b6"
};

// Initialize Firebase
let app;
if (firebase.app.length ===0){
    app = firebase.initializeApp(firebaseconfig);
} else {
    app=firebase.app()
}
const auth = firebase.auth()

export {auth};