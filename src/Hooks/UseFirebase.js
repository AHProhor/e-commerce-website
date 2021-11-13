import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // create user and password Authentication
    const registerUser = (email,password,name,phone,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser= {email, displayName: name}
            setUser(newUser);
            // save user to the database
            saveUser(email, name,'POST');
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(() => {
              }).catch((error) => {
              });
            history.replace('/');
        })
        .catch((error) => {
            
            setAuthError( error.message);
            // ..
        })
        .finally(() => setIsLoading(false));

    }

    // sign in with email and password

    const loginUser = (email, password,location, history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.form || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError( error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // google login system
    const signInWithGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.form || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError( error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // user observer 

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    },[])

    // Logout section
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
          }).catch((error) => {
            setAuthError( error.message);
          })
          .finally(() => setIsLoading(false));
    }


    // User store in database

    const saveUser = (email,displayName,method) =>{
        const user ={email, displayName};
        fetch('https://polar-waters-05894.herokuapp.com/users',{
            method: method ,
            headers:{ 
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return{
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
        signInWithGoogle
    }
}
export default useFirebase;