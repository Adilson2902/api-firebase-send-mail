
  const firebase = require('firebase')


  var firebaseConfig = {
    apiKey: "AIzaSyDCVKJIZKRNrksZWg-OMybhF9xSp1bVmKg",
    authDomain: "onedu-64b4e.firebaseapp.com",
    projectId: "onedu-64b4e",
    storageBucket: "onedu-64b4e.appspot.com",
    messagingSenderId: "766106496545",
    appId: "1:766106496545:web:6e1544fdf2c691817d7d60",
    measurementId: "G-8TYJJM9RQ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 export default firebase;





  