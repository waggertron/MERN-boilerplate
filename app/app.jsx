import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';


const postJSON = (url, data) => {
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
    const data = {};
    if (this.state.mode === 'Login') {
      data.identifier = this.state.identifier;
      data.password = this.state.password;
    } else {
      data.username = this.state.username;
      data.password = this.state.password;
      if (this.state.email) data.email = this.state.email;
    }
    console.log(data);
    postJSON(`/${this.state.mode}`, data).then((res) => {
      this.handleSubmitResponse(res);
    });
  }
  handleSubmitResponse(res) {

  }
  handleType(e) {
    const el = e.target;
    console.log(el.name);
    console.log(el.value);
    console.log(this.state);
    this.setState({ [el.name]: el.value });
    setTimeout(() => console.log(this.state, 0));
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
