import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';


$.postJSON = (url, data) => {
  return $.ajax({
    url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: true,
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Login',
      identifier: '',
      username: '',
      email: '',
      password: '',
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
    this.switchMode = this.switchMode.bind(this);
  }

  componentDidMount() {

  }
  handleSubmit() {

  }
  handleSubmitResponse() {

  }
  handleType(e) {
    const el = e.target;
    this.setState({ [el.name]: el.value });
  }

  switchMode() {
    const newMode = this.state.mode === 'Login' ? 'Signup' : 'Login';
    this.setState({ mode: newMode, identifier: '', username: '', email: '', password: '', error: '' });
  }
  render() {
    const form = this.state.mode === 'Signup' ? <SignupForm handleSubmit={this.handleSubmit} handleType={this.handleType} /> : <LoginForm handleSubmit={this.handleSubmit} handleType={this.handleType} />;
    const error = this.state.error ? <p id="errorMsg">{this.state.error}</p> : null;
    return (
      <div id="loginBox">
        <button className="altAuthBtn" onClick={this.switchMode}>
          {this.state.mode == 'Login' ? 'Need an account?' : 'Already have an account?'}
        </button>
        <h1 id="formTitle">{this.state.mode}</h1>
        {form}
        {error}
      </div>
    );
  }
}



export default App;
