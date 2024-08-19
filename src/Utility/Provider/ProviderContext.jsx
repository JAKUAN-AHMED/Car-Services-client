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
import {GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
export const AuthContext = createContext();
const ProviderContext = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();

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
  const google=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  //with github
  const github=()=>{
    return signInWithPopup(auth,githubProvider)
  }
 

  // log out
  const LogOut = () => {
    return signOut(auth);
  };

  //onauthstate change
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return()=>{
        Unsubscribe();
    };
  }, [auth]);
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
