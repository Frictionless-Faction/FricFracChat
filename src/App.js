import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
require('dotenv').config();


firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <section>
          {user ? <chatRoom /> : <signIn />}
        </section>
      </header>
    </div>
  );
};


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return(
    <button onClick = {signInWithGoogle}> Sign in with Google </button>
  )

};

function SignOut() {
  return auth.currentUser && (
    <button onClick = {() => auth.signOut()}> Sign Out</button>
  )

};




function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return(
    <>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
    
    <form>
      <input />
      <button type = 'submit'> Submit </button>

    </form>
    </>
  )

};

function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' ;


  return (
    <div className = {`message ${messageClass}`}>
      <img src = {photoURL} alt="Profile pic"/>
      <p> {text} </p>
      

    </div>
    
  )
}

export default App;
