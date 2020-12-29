import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
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

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Add User
        </div>
        <div className="col-md-2 text-right">
          <Link to={"/users"}><h5 class="btn btn-outline-primary">&laquo; back to user list</h5></Link>
        </div>
      </div>
    
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-body">

              <div class="form-group">
                <label className="h5">Username</label>
                <input className="form-control col-md-6"
                placeholder="User name" value={this.state.username}
                onChange={this.onUserChange} required
                />
              </div>
              
              <hr />
              <div>
                <button className="btn btn-primary" type="submit">Create User</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }

};

export default withRouter(AddUser);