import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";

const SignInScreen = ({ text }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          defaultValue={text}
          ref={emailRef}
          className="email"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={signIn} className="signInScreen_button">
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span onClick={register} className="signUpScreen_link">
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
