import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { auth } from '../pages/Chat';

const AuthContext = createContext();
const user = firebase.auth().currentUser;

export function useAuth(){
    return useContext(AuthContext)
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function updateNameProfilePic(displayNameRef, photoURLRef){
        return user.updateProfile({
            displayName: displayNameRef,
            photoURL: photoURLRef
          }).then(() => {
            // Update successful
            console.log("Profile update successful!")
          }).catch((error) => {
            // An error occurred
            console.log("could not update displayName or photoURL")
          });  
    }

    // Insert empty array so that it only runs once
    useEffect(() => {    
        // Sets user when Auth state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe
    }, []);


    const value = {
        currentUser,
        updateNameProfilePic
    }
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};
