import React, { createContext, useState, useEffect } from 'react';
import {  getAuth, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../config/Firebase.config';
export const Authcontext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);

    const LoginProvider = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const userUpdate = (Name, photo) => {
        setLoader(true)
        updateProfile(auth.currentUser, {
            displayName: Name,
            photoURL:photo
        }).then((res) => {
           
        }).catch((error) => {
            
        });
    }
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const authInfo = { user,loader, LoginProvider, createUser, userUpdate, userLogin, logOut};
   
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;