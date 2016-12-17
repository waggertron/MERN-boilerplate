import React from 'react';

const SignupForm = (props) => {
  return (
    <form action="#">
      <label htmlFor="email">
        Email* (optional)
        <br />
        <input name="email" type="email" onChange={props.handleType} />
        <br />
      </label>
      <label htmlFor="username">
        Username
      <br />
        <input name="username" type="text" onChange={props.handleType} />
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
  );
};
export default SignupForm;
