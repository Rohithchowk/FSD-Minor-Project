import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const formStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const signUpStyle = {
    transform: 'rotate(7deg)',
  };

  const rotateStyle = {
    animation: 'animateRotate 0.7s ease-in-out forwards',
    animationDelay: '0.3s',
  };

  const signInStyle = {
    animation: 'animateSignIn 1.5s ease-in-out forwards',
  };

  const animateRotateStyle = {
    animation: 'animateRotate 0.7s ease-in-out forwards',
    animationDelay: '0.3s',
  };

  const animateSignUpStyle = {
    animation: 'animateSignUp 1.5s ease-in-out forwards',
  };

  return (
    <div className={`wrapper ${isSignUp ? 'animate-signIn' : 'animate-signUp'}`}>
      <div
        className={`form-wrapper ${isSignUp ? 'sign-up' : 'sign-in'}`}
        style={{ ...formStyle, ...(isSignUp ? signUpStyle : signInStyle) }}
      >
        <form action="login" method="POST">
          <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
          <div className="input-group">
            <input type="text" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          {isSignUp && (
            <div className="input-group">
              <input type="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
          )}
          <div className="input-group">
            <input type="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>

          {isSignUp ? (
            <button type="submit" name="signup" className="btn">
              Sign Up
            </button>
          ) : (
            <button type="submit" name="login" className="btn">
              Login
            </button>
          )}

          <div className="sign-link">
            <p>
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <button type="button" className="toggle-link" onClick={toggleForm}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
