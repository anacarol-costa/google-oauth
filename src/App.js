import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class App extends Component {

  responseGoogle=(response)=> {
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (
      <div>
        <GoogleLogin 
        clientId='112715506728-tea755e4cu7ggrjv7hvjj4lpla6ptqvq.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default App