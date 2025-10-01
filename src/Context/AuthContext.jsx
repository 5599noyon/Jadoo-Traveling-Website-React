import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
     currentUser: null,
     loading: true,
     signup: () => { },
     login: () => { },
     logout: () => { }
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

     const Value = { currentUser, loading, signup, login, logout }

     return (
          <AuthContext.Provider value={Value} >
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;