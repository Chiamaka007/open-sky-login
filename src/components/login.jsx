import React, { Component } from "react";
import '../App.css';
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
      event.preventDefault();
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "hamoye") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container ">
          <div className="div-wrapper">
         
        <form onSubmit={this.login} className="form-group">
        <h2 className="text-center text-xl font-bold">Please Login</h2>
          
          <label for="email">Username</label>
              <input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
                className="my-8"
              />
              
               <label for="email">Password</label>
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
                className="my-8"
              />
              
                <div className="text-center ">
              <button type="submit" className="button w-full" >Login</button>
              </div>
          <p className="italic text-red-500">username ="admin" & password ="hamoye"</p>
        </form>
        </div>
      </div>
      
    );
  }
}
export default Login;
