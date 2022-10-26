import React, { createContext, useState, useEffect } from 'react';
import {  getAuth, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
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
    const authInfo = { user,loader, LoginProvider, createUser};
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;