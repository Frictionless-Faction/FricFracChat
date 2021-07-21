import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { auth } from '../pages/Chat';
require ('dotenv').config();

export default function QuickUpdate() {
    const user = firebase.auth().currentUser;
    console.log(user);
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    console.log(displayName);
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const creationTime = metadata.creationTime;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    }

   const [currentUser, setCurrentUser] = useState();
    useEffect(() => {    
        // Sets user when Auth state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(currentUser);
            setCurrentUser(user);
        });
        return unsubscribe
    }, [currentUser]);

    return (
        <div>
            <p>display name: {user.displayName}</p>
            <p>email: {user.email} </p>
            <p>photo: {user.photoURL}</p>
        </div>
    )
}