import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const user = firebase.auth().currentUser;
require ('dotenv').config();

// tester page
function UpdateInfo(){
  const { register, formState: { errors }, handleSubmit} = useForm();
  const usersRef = firestore.collection("users").doc();
  // const userID = user.uid;
  const onSubmit = data => {
    
    console.log(data);

  }

    return(
      <div>
        <h1>hello</h1> 
        {/* confirm update here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* place holder is text inside */}
          <div>
            <label>Status</label>
            <input placeholder="hi" {...register("status", { maxLength: 140 })} />
            <p>{errors.status && "The status cannot exceed 140 characters."}</p>
          </div>
          <div>
            <label>Bio</label>
            <input placeholder="Tell us about yourself.." {...register("bio", { maxLength: 300 })} /> 
            <p>{errors.bio && "The bio cannot exceed 300 characters."}</p>
          </div>
          <div>
          <p>Joined on: {user.metadata.creationTime}</p>
          </div>
      <input type="submit" />
        </form>
      </div>
    );
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<UpdateInfo />, rootElement);

export default UpdateInfo;