import React from 'react';


const LoginForm = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="identifier">
          Username/email:
          <br />
          <input name="identifier" type="text" onChange={props.handleType} />
        </label>
        <br />
        <label htmlFor="password">
          Password:
        <br />
          <input name="password" type="password" onChange={props.handleType} />
        </label>
        <br />
        <button className="submitBtn" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
};



export default LoginForm;

