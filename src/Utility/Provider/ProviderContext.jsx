import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth/web-extension";
import axios from "axios";
export const AuthContext = createContext();
const ProviderContext = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [User, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);
  //create user
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //log in
  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //with google
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //with github
  const github = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // log out
  const LogOut = () => {
    return signOut(auth);
  };

  //onauthstate change
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userEmail=currentUser?.email || User?.email;
      const loggedUser={email:userEmail};
      console.log("current User", currentUser);

      //if current user exist then issue a token

      if(currentUser)
      {
        axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
        .then(res=>{
          console.log('token response',res.data);
        })
      }
      else{
        axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
        .then(res=>{
          console.log(res.data)
        })
      }
      setLoader(false);
    });
    return () => {
      Unsubscribe();
    };
  }, [auth,User?.email]);
  const authInfo = {
    CreateUser,
    LogIn,
    LogOut,
    Loader,
    User,
    google,
    github,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProviderContext;
