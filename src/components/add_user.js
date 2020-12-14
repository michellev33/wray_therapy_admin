import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
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
      .then(res => 
        console.log(res),
        this.props.history.push("/users")
        )
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
        <center><h1>Add User</h1></center>
        <div className="post">
            <form className="post" onSubmit={this.handleSubmit}>
            <div className="card">
              <div className="card-body">
                <h5>Username</h5>
                <input
                placeholder="User" value={this.state.username}
                onChange={this.onUserChange} required
                />
              </div>
            </div>
            <div>
              <button type="submit">Create User</button>
            </div>
              </form>
          </div>
      </div>
    );
  }

};


export default withRouter(AddUser);