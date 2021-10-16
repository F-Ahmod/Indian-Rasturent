import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitalize =()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitalize;