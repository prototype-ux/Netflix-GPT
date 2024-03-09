import React, { useState, useRef } from "react";
import Header from "./Header";
import validateform from "../utils/validateform";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const password = useRef(null);
  const email = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    console.log("clicked");
    const message = validateform(email.current.value, password.current.value);
    //console.log(email.current.value);
    //console.log(password.current.value);
    //console.log(message)
    if (message) {
      seterrorMessage(message);
      return;
    } else seterrorMessage(null);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
          })
            .then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        
              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              seterrorMessage("error")
              // An error occurred
              // ...
            });
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "---" + errorMessage);
        });
    }
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "---" + errorMessage);
        });
    }
  };
  const togglesigninform = () => {
    setisSignInForm(!isSignInForm);
    //seterrorMessage(null);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-pic"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black rounded-md bg-opacity-80 absolute mx-auto w-3/12 my-36 right-0 left-0 p-12 text-white text-center"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            required
            className="p-2 my-3 w-full rounded-md  bg-gray-500 text-sm "
          />
        )}
        <input
          ref={email}
          required
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full rounded-md  bg-gray-500 text-sm"
        />
        <input
        
          ref={password}
          required
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full rounded-md  bg-gray-500 text-sm"
        />
        {errorMessage !== null && (
          <p className="text-red-700  font-bold text-left mt-[-10px] text-sm p-0">
            {errorMessage}
          </p>
        )}
        <button
          className="p-2 my-3  bg-red-700 w-full rounded-md font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to Netflix " : "Already a User? "}
          <span
            className="font-semibold text-red-700 cursor-pointer"
            onClick={togglesigninform}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          now!!
        </p>
      </form>
    </div>
  );
};

export default Login;
