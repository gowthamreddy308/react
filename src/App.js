import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <form className="Openform">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" id="fname" aria-describedby="fname"
                   placeholder="Enter First name" />

          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" aria-describedby="lname"
                   placeholder="Enter Last name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter Email"/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

      </header>
    </div>
  );
}

export default App;
