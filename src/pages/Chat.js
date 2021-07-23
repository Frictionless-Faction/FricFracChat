// Going to put the app code in here
import React, { useRef, useState } from 'react';
import signInCSS from '../css/Sign-In.module.css';
import chatCSS from '../css/Chat.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Link } from  'react-router-dom';
import  Headroom  from 'react-headroom';
// import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
require ('dotenv').config();

// initialise the config of the firebase app
firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId

});

// // catch errors for dotenv
// if (env.error) {
//   throw env.error
// };

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div>
    <SignOut />
      <section className={chatCSS.app}>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
};

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div class="sign-in-container">
      <button className={chatCSS.button} onClick={signInWithGoogle}>Sign in with Google</button>
      <div className="tagline">Check out our community guidelines or you could be banned for life!</div>
    </div>
  )
};

function SignOut() {
  return auth.currentUser && (
    <Headroom className={chatCSS.headroom}>
      <Link className={chatCSS.about} to = "/about" >About</Link>
      <button className={chatCSS.signOut} onClick={() => auth.signOut()}>Sign Out</button>
    </Headroom>
  )
};


function ChatRoom() {
  const scrolls = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  
  // e as event for the function argument
  const sendMessage = async (e) => {
    // normally when a form submitted it refresh the page but here we add this line to prevent it 
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    // to scrolls the page when user types
    scrolls.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<div className={chatCSS.chatSelection}>
    <main className={chatCSS.main}>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={scrolls}></span>

    </main>

    <form className={chatCSS.form} onSubmit={sendMessage}>
  
      <input className={chatCSS.input} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Be kind and say something nice... " />

      <button className={chatCSS.submit} type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </div>)
};


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`${chatCSS.message} ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="Profile pic"/>
      <p className={`${chatCSS.sent} ${chatCSS.p}`}>{text}</p>
    </div>
  </>)
};


export default Chat;