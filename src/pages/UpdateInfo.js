import React from "react";
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const user = firebase.auth().currentUser;
require ('dotenv').config();

// tester page

function UpdateInfoP1(){
  // const userID = user.uid;

  // Updates the user attributes:
// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(function() {
//   // Profile updated successfully!
//   var displayName = user.displayName;
//   // "https://example.com/jane-q-user/profile.jpg"
//   var photoURL = user.photoURL;
// }, function(error) {
//   // An error happened.
// console.log("P1 profile could not be updated")
// });

  return(
    <div>
        <img src={user.photoURL} alt="Profile pic" />
        <p>Joined on: {user.metadata.creationTime}</p>
        <form>
        <button onclick="updateProfile()">Update</button>
        </form>
    </div>
  )
}


// function UpdateInfoP2(user){
//   const { register, formState: { errors }, handleSubmit} = useForm();
//   // const usersRef = firestore.collection("users").doc();

//   const onSubmit = data => {
    
//     console.log(data);

//   }

//     return(
//       <div>
//         <h1>hello</h1> 
//         {/* confirm update here */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* place holder is text inside */}
//           <div>
//             <label>Status</label>
//             <input placeholder="hi" {...register("status", { maxLength: 140 })} />
//             <p>{errors.status && "The status cannot exceed 140 characters."}</p>
//           </div>
//           <div>
//             <label>Bio</label>
//             <input placeholder="Tell us about yourself.." {...register("bio", { maxLength: 300 })} /> 
//             <p>{errors.bio && "The bio cannot exceed 300 characters."}</p>
//           </div>
//           <div>
//           <p>Joined on: time </p>
//           </div>
//       <input type="submit" />
//         </form>
//       </div>
//     );
//   };


export default UpdateInfoP1;