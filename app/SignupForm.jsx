import React from 'react';

const SignupForm = (props) => {
  return (
    <div id="signupFormDiv">
      <form action="#">
        <label htmlFor="email">
          Email:
        <br />
          <input name="email" type="email" onChange={props.handleType} />
          <br />
        </label>
        <label htmlFor="password">
          Password
        <br />
          <input name="password" type="password" onChange={props.handleType} />
        </label>
        <br />
        <button type="button" className="submitBtn" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default SignupForm;
