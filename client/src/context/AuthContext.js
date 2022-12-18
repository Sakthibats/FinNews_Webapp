import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetpw(email){
        return auth.sendPasswordResetEmail(email)
    }
    function resetname(name){
        const user = auth.currentUser
        return user.updateProfile({
            displayName: name
        })
    }

    function googlelogin(){
        return signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user)
            // ...
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    } 

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value= {
        currentUser, 
        signup, 
        login, 
        logout, 
        googlelogin,
        resetpw,
        resetname
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
  )
}