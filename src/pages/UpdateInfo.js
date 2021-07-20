import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { user, firestore, photoURLRef, displayNameRef } from "../contexts/AuthContext"


// tester page

function UpdateInfoP1(){

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { updateNameProfilePic } = useAuth();

  // e for event
  const sendUpdateAuth = async (e) => {
    e.preventDeafult();

    try {
      await updateNameProfilePic(photoURLRef.current.value, displayNameRef.current.value);
    } catch {
      throw new Error("unable to update profile")
    }
  };

  // console log for testing
  const onSubmit = data => {
    console.log(data);
  };

  return(
    <div>
      <img src={user.photoURL} alt="Profile pic" />
      <p>Joined on: {user.metadata.creationTime}</p>
        <form onSubmit={sendUpdateAuth, handleSubmit(onSubmit)}>
          {/* place holder is text inside */}
          <div>
            <label>Profile Picture URL</label>
              <input placeholder="URL goes here..." ref={ photoURLRef } {...register("photoURLRef")  } />
                <p>{errors.photoURL && "Could not change photoURL"}</p>
          </div>
          <div>
            <label>Display Name</label>
              <input placeholder="Display name goes here..." ref= { displayNameRef } {...register("displayNameRef", { maxLength: 32 })} /> 
                <p>{errors.bio && "The display name cannot exceed 32 characters."}</p>
          </div>
        <input type="submit" />
        </form>
    </div>
  )
}


function UpdateInfoP2(){
  const { register, formState: { errors }, handleSubmit} = useForm();
  const usersRef = firestore.collection("users").doc(user.uid);
  const statusRef = usersRef.status
  const bioRef = usersRef.bio

  const onSubmit = data => {
    
    console.log(data);

  }
// add ref values
    return(
      <div>
        <h1>hello</h1> 
        {/* confirm update here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* place holder is text inside */}
          <div>
            <label>Status</label>
            <input placeholder="Put status here.." ref= {statusRef} {...register("status", { maxLength: 140 })} />
            <p>{errors.status && "The status cannot exceed 140 characters."}</p>
          </div>
          <div>
            <label>Bio</label>
            <input placeholder="Tell us about yourself.." ref= {bioRef} {...register("bio", { maxLength: 300 })} /> 
            <p>{errors.bio && "The bio cannot exceed 300 characters."}</p>
          </div>
      <input type="submit" />
        </form>
      </div>
    );
  };


export default UpdateInfoP1;