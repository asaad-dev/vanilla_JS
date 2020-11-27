// Import stylesheets
// import 'assets/css/style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// async function main() {}//no idea

//CONFIG
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArpu-jTSgMpTJErcziR6Q5WggsNokUX4",
  authDomain: "fir-bootstrap-cc6d4.firebaseapp.com",
  databaseURL: "https://fir-bootstrap-cc6d4.firebaseio.com",
  projectId: "fir-bootstrap-cc6d4",
  storageBucket: "fir-bootstrap-cc6d4.appspot.com",
  messagingSenderId: "228414038293",
  appId: "1:228414038293:web:24a95c74e3ff423548091c",
  measurementId: "G-FP1TT906PP"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();


// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
  
  // Email / Password Provider.
  firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

  callbacks: {
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    // Handle sign-in.
    // Return false to avoid redirect.
    return false;
      }
    }
  };

// Initialize the FirebaseUI widget using Firebase
const ui = new firebaseui.auth.AuthUI(firebase.auth());


// Listen to RSVP button clicks
startRsvpButton.addEventListener("click",
 () => {
      ui.start("#firebaseui-auth-container", uiConfig);
});


// Listen to the current Auth state
firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    startRsvpButton.textContent = "LOGOUT"
  }
  else {
    startRsvpButton.textContent = "RSVP"
  }
});


