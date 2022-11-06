import React from "react";
import "./Auth.css";
import Login from "./Login";
import Register from "./Register";
import { useState, useEffect } from "react";
const Auth = () => {
  const styleForSelected = {
    backgroundColor: "#003F46",
    color: "rgb(252, 253, 253)",
    borderRadius: 0,
  };
  const [styledLogin, setStyledLogin] = useState({});
  const [styledSign, setStyledSign] = useState({});
  const [isRegistred, setIsRegistred] = useState(false);

  /*-----use Effect here ------*/
  useEffect(() => {
    if (isRegistred) {
      setStyledLogin(styleForSelected);
      setStyledSign({});
    } else {
      setStyledSign(styleForSelected);
      setStyledLogin({});
    }
  }, [isRegistred]);

  /*----------------handlers here ----------*/
  const handelSignUp = () => {
    setStyledSign(styleForSelected);
    setStyledLogin({});
    setIsRegistred(false);
  };
  const handelLogIn = () => {
    setStyledLogin(styleForSelected);
    setStyledSign({});
    setIsRegistred(true);
  };
  return (<>

<div className='btn-groups flex'>
                <button type = "button" className='btn-item bg-brown fw-4 ls-2'>See Schedule</button>
                <button type = "button" className='btn-item bg-dark fw-4 ls-2' onClick={handelSignUp}>Register Now</button>
</div>
{isRegistred ?  <Register />:null}
</>
  );
};

export default Auth;
