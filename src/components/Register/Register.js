import React from "react";
import "./Register.css";
import { useState } from "react";
import {location,speciality} from '../../constants/data'
import Footer from "../Footer/Footer";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [Loc, setLoc] = useState(0);
  const [delegations, setDelegations] = useState("");
  const [Role, setRole] = useState(" ");

  const Gov = [
    "Tunis",
    "Ariana",
    "Manouba",
    "Ben Arous",
    "Nabeul",
    "Bizerte",
    "Zaghouan",
    "Sousse",
    "Monastir",
    "Mahdia",
    "Sfax",
    "Beja",
    "Jendouba",
    "Kef",
    "Siliana",
    "Kairouan",
    "Sidi Bouzid",
    "Kasserine",
    "Gabes",
    "Medenine",
    "Gafsa",
    "Tozeur",
    "Tataouine",
    "Kebili",
  ];
  /*------------------handlers here------------------*/
  const handelNext1 = () => {
    setCurrentStep(1);
  };

  const handelBack0 = () => {
    setCurrentStep(0);
  };
  const handelNext2 = () => {
    setCurrentStep(2);
  };
  const handelBack1 = () => {
    setCurrentStep(1);
  };
  const handelSubmit = () => {
    window.alert("Great Job");
  };
  const handelLoc = (e) => {
    setLoc(Gov.indexOf(e.target.value));
  };

  const handelDeleg = (e) => {
    setDelegations(e.target.value);
    console.log(delegations);
  };

  const handelRole = (e) => {
    setRole(e.target.value);
    console.log(Role);
  };

  return (
    <>
    
    <div className="regiterk-container">
      {currentStep === 0 && (
        <>
          <h2>Sign Up</h2>
          <div className="input"></div>
          <div className="input">
            <input type="email" id="email" />
            <label for="email" className="label">
              Email*
            </label>
          </div>
          <div className="input">
            <input type="number" id="phone" />
            <label for="phone">Phone*</label>
          </div>
          <div className="input">
            <input type="linkedin" id="linkedin" />
            <label for="linkedin">Linkedin*</label>
          </div>
          <button onClick={handelNext1}>Next</button>
        </>
      )}

      {currentStep === 1 && (
        <>
          <h2>Who you are?</h2>
          <div className="input">
            <input type="text" id="name" />
            <label>First Name*</label>
          </div>
          <div className="input">
            <input type="text" id="name" />
            <label>Last Name*</label>
          </div>

          <select onChange={handelLoc}>
            {Gov.map((item) => {
              return (
                <>
                  <option value={item}>{item}</option>
                </>
              );
            })}
          </select>

          <select onChange={handelDeleg}>
            {location[Loc][Gov[Loc]].map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          <div className="btnk-auth-cont">
            <button onClick={handelBack0}>Back</button>
            <button onClick={handelNext2}>Next</button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h2>What you are?</h2>
          <select name="sexe">
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>

          <select name="Role" onChange={handelRole}>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Entreprenor">Entreprenor</option>
          </select>
          {Role === "Entreprenor" && (
            <select name="spm">
              {speciality.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
          )}
          <div className="btnk-auth-cont">
            <button onClick={handelBack1}>Back</button>
            <button onClick={handelSubmit}>Create</button>
          </div>
        </>
      )}
    </div>
    </>
  );
};
export default Register;
