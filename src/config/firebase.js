import * as firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyCmfJ6YCqO4eLOfDLwdo_gTRLWpZeCcrXg",
    authDomain: "testvue-b1007.firebaseapp.com",
    databaseURL: "https://testvue-b1007.firebaseio.com",
    projectId: "testvue-b1007",
    storageBucket: "testvue-b1007.appspot.com",
    messagingSenderId: "875735594930",
    appId: "1:875735594930:web:36f5b95900f286df7bd6ab"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };