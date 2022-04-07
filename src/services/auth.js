import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPasswor, signInWithEmailAndPassword} from "firebase/auth";
import store from "../store";

export const signup = ({firstName, lastName, email, password, phone},onSucess,onFailure) => {
const auth= getAuth (); 
 createUserWithEmailAndPassword(auth, email, password)
 .then ((userCredential) => { 
     //Signed in 
     const user = userCredential.user;
 })
 .catch ((error) => { 
     const errorCode = error.code; 
     const errorMessage = error.message; 
     
 });
}
export const signIn=({email,password},onSucess,onFailure)=>{
    const auth = getAuth ();
    signInWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => { 
        //Signed in 
        const user = userCredential.user;
        console.log("userSignedInSuccessfully")
        store.user.set({ fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated: true})
        if(onSucess) {
            onSucess()
        }
    })
    .catch ((error) => { 
       
        const errorCode = error.code; 
        const errorMessage = error.message; 
        console.log("userDidNotSignInSuccessfully")
        if(onFailure) {
            onFailure(errorMessage)
        }
    });
}