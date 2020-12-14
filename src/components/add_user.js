import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class AddUser extends Component {

  state = {
    username: ""
  };

  onUserChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username
    };
    axios
      .post(process.env.REACT_APP_SERVICE_API_URL + "/users", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
        <center><h1>Add User</h1></center>
        <div className="post">
            <form className="post" onSubmit={this.handleSubmit}>
                <input
                placeholder="User" value={this.state.username}
                onChange={this.onUserChange} required
                />
                <button type="submit">Create User</button>
              </form>
          </div>
      </div>
    );
  }

};


export default AddUser