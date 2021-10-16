import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseInitalize from './Firebase.init';
firebaseInitalize();
const UseFirebase =()=>{
    const [user,setuser]=useState({})
    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singinWithgoogle=()=>{
        signInWithPopup(auth, googleProvider)
    .then(result=>{
        setuser(user.result)
    })
    }

    return{
        singinWithgoogle

    }

}
export default UseFirebase;