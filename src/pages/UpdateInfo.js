import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { user } from "../contexts/AuthContext"
import { firestore } from "./Chat";


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
      {/* <img src={user.photoURL} alt="Profile pic" /> */}
      {/* <p>Joined on: {user.metadata.creationTime}</p> */}
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


// function UpdateInfoP2(){
//   const { register, formState: { errors }, handleSubmit} = useForm();
//   const usersRef = firestore.collection("users").doc(user.uid);
//   const statusRef = getValues(statusRef)
//   const bioRef = getValues(bioRef)

//   const onSubmit = data => {
    
//     console.log(data);

//   }
// // add ref values
//     return(
//       <div>
//         <h1>hello</h1> 
//         {/* confirm update here */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* place holder is text inside */}
//           <div>
//             <label>Status</label>
//             <input placeholder="Put status here.." {...register("statusRef", { maxLength: 140 })} />
//             <p>{errors.status && "The status cannot exceed 140 characters."}</p>
//           </div>
//           <div>
//             <label>Bio</label>
//             <input placeholder="Tell us about yourself.." {...register("bioRef", { maxLength: 300 })} /> 
//             <p>{errors.bio && "The bio cannot exceed 300 characters."}</p>
//           </div>
//       <input type="submit" />
//         </form>
//       </div>
//     );
//   };


export {UpdateInfoP1} ;