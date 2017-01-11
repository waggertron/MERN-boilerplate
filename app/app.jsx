import React, { Component } from 'react';


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
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      
      );
  }
}



export default App;
