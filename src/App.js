import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDEPYPHvbN3NnY3xeynCZumLmT4LCKpkiM",
  authDomain: "frictionless-faction.firebaseapp.com",
  projectId: "frictionless-faction",
  storageBucket: "frictionless-faction.appspot.com",
  messagingSenderId: "77867668377",
  appId: "1:77867668377:web:c16c299d503b947f92f908",
  measurementId: "G-SEYMGF0TT7"
})




const auth = firebase.auth();
const firestore = firebase.firestore();



const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {user ? <chatRoom /> : <signIn />}
        </section>
      </header>
    </div>
  );
}


function signIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return(
    <button onClick = {signInWithGoogle}> Sign in with Google </button>
  )

};

function signOut() {
  return auth.currentUser && (
    <button onClick = {() => auth.signOut()}> Sign Out</button>
  )

};




function chatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return(
    <>
    <div>
      {messages && messages.map(msg => <ChatMassage key={msg.id} massage={msg} />)}
    </div>
    
    <form>
      <input />
      <button type = 'submit'> Submit </button>

    </form>
    </>
  )

};


function ChatMassage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' ;


  return (
    <div className = {`message ${messageClass}`}>
      <img src = {photoURL} />
      <p> {text} </p>
      

    </div>
    
  )
}

export default App;
