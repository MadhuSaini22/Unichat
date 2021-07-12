import firebase from "firebase/app";
import "firebase/auth";


export const auth=firebase.initializeApp({
        apiKey: "AIzaSyB0ttTby_8SxIqqqG6RqZ3UQXDWVFTZhAE",
        authDomain: "unichat-99a00.firebaseapp.com",
        projectId: "unichat-99a00",
        storageBucket: "unichat-99a00.appspot.com",
        messagingSenderId: "188646481472",
        appId: "1:188646481472:web:f5a28cec33cdb6bd3289a5"
      
}).auth();