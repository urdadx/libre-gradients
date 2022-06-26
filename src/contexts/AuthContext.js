import firebase from 'firebase/compat/app';
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../backend/firebase";


const AuthContext  = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    const [loading,setLoading] = useState(false);
    const provider = new firebase.auth.GoogleAuthProvider();
    const [currentUser,setCurrentUser] = useState("");

    // Sign in With Google
    const authWithGoogle = async () =>{
        await firebase.auth().signInWithPopup(provider);

    };

    const googleSignout = () =>{
        firebase.auth().signOut()
            
        .then(()=> {
            console.log('Signout Succesful')
        },
        (error)=> {
            console.log('Signout Failed');
            console.log(error.message)
        });
   }

    const value = { 
        currentUser,
        authWithGoogle,
        googleSignout
    }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
        try{
            setCurrentUser(user);
            setLoading(false);
        }

        catch(error){
            console.log(error.message)
        }

    })

    return unsubscribe;

},[])

       
    return ( 
        <>
        <AuthContext.Provider value = {value} >
            {!loading && children}
        </AuthContext.Provider>
        </>
    );
}
 
export default AuthProvider;