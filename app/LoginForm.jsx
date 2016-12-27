import React from 'react';


const LoginForm = (props) => {
  return (
    <div>
      <form action="#">
        <label htmlFor="email">
          Email:
          <br />
          <input name="email" type="text" onChange={props.handleType} />
        </label>
        <br />
        <label htmlFor="password">
          Password:
        <br />
          <input name="password" type="password" onChange={props.handleType} />
        </label>
        <br />
        <button type="button" className="submitBtn" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
};



export default LoginForm;

