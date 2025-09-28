import { children } from "@splidejs/splide/src/js/utils";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
     currentUser: null,
     loading: true,
     login: () => { }
})

const AuthProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(()=> {
          const unsubscribe = onAuthStateChanged(auth, (user)=> {
          setCurrentUser(user)
          });

          return ()=> unsubscribe()

     } , [])

     const login = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
     }

     const Value = { currentUser, loading, login }

     return (
          <AuthContext.Provider value={Value} >
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;