import React from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";

const user = firebase.auth().currentUser;
require ('dotenv').config();

// tester page
function UpdateInfoP1(){

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { updateNameProfilePic } = useAuth();

  
  // e for event
  // console log for testing
  const onSubmit = async (data, e) => {
    // e.preventDeafult();
    console.log(data, e);
    const photo = data.photoURLRef
    const displayName = data.displayNameRef

    try {
      await updateNameProfilePic(photo, displayName);
  } catch {
    throw new Error("unable to update profile")
  }
  };


  return(
    <div>
      <div className="displayUserAuth">
      <img src={user.photoURL} alt="Profile pic" />
      <p>Joined on: {user.metadata.creationTime}</p>
      </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* place holder is text inside */}
          <div>
            <label>Profile Picture URL</label>
              <input placeholder="URL goes here..." {...register("photoURLRef")  } />
                <p>{errors.photoURL && "Could not change photoURL"}</p>
          </div>
          <div>
            <label>Display Name</label>
              <input placeholder="Display name goes here..." {...register("displayNameRef", { maxLength: 32 })} /> 
                <p>{errors.bio && "The display name cannot exceed 32 characters."}</p>
          </div>
        <input type="submit"/>
        </form>
    </div>
  )
}



export {UpdateInfoP1} ;