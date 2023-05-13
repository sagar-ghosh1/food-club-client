import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const GetContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const describe = onAuthStateChanged(auth, (usersInfo) => {
            setUsers(usersInfo);
            setLoading(false)
        })
        return () => {
            return describe();
        }
    }, [])

    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubSign = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const authInfo = {
        users,
        signIn,
        googleSign,
        githubSign,
        userLogOut,
        registerUser,
        loading
    }

    return (
        <GetContext.Provider value={authInfo}>
            {children}
        </GetContext.Provider>
    );
};

export default AuthProvider;
