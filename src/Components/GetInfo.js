import React, { useContext } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useAuth } from "../contexts/AuthContext";
import { auth } from '../pages/Chat';


// const user = firebase.auth().currentUser;
// require ('dotenv').config();

export default function GetInfo() {
    // const user = useContext(useAuth);
    const [user] = useAuthState(auth);
    // const { photoURL, displayName, metadata, uid } = user;
    console.log(user.photoURL);
    return (
        <div>
            <h1>hi</h1>
                <img src={user.photoURL} alt="Profile pic" />
                <p>DisplayName: {user.displayName}</p>
                <p>Joined on: {user.metadata.creationTime}</p> 
                <p>uid: {user.uid} </p>
        </div>
    )
}
