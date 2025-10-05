import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext({
     currentUser: null,
     loading: true,
     signup: () => { },
     login: () => { },
     logout: () => { },
     gmailLogin: () => { },
})

const AuthProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          setLoading(true)
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               setCurrentUser(user)
               setLoading(false)
          });

          return () => unsubscribe()

     }, [])

     const signup = (email, password, navigate) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then(() => {
                    sendEmailVerification(auth.currentUser)
                         .then(() => {
                              alert("Email Verification Sent! Check Your Email")

                              if (navigate) {
                                   return navigate("/auth/login")
                              }

                         }).catch((err) => {
                              console.log("Verification Faild");

                         })
               })

     }
     const login = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);

               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);

               });


     }

     const logout = () => {
          signOut(auth)
     }

     const gmailLogin = () => {

          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
               .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
               }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
               });
     }

     const Value = { currentUser, loading, signup, login, logout, gmailLogin, }

     return (
          <AuthContext.Provider value={Value} >
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;