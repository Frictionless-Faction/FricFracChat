// import React, { useRef, useState } from 'react';
// import '../App.css'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';



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