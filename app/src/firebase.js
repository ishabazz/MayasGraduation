import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBW7Sz9-u4gASuF6QNFru3tmRJKfUpw0lQ",
    authDomain: "mayagraduation.firebaseapp.com",
    databaseURL: "https://mayagraduation.firebaseio.com",
    projectId: "mayagraduation",
    storageBucket: "mayagraduation.appspot.com",
    messagingSenderId: "543920507273",
    appId: "1:543920507273:web:6146f6fc8add8b0cef7958",
    measurementId: "G-EJDXPY188C"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;