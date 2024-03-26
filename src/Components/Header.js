import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";

import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    //unsubscribe will be called if the component unmounts
    return ()=>unsubscribe();
  }, []);
  
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  const handleGptSearchClick=()=>{
    console.log("gpt clicked")
    dispatch(toggleGptSearchView())

  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
      <img
        alt="logo"
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
      />
      {user && (
        <div className="flex p-2 justify-between">
           {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            className="text-red-700 font-bold mr-2 text-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <img 
            className="w-12 h-12 hidden md:block"
            //src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            src={user?.photoURL}
            alt="user"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
