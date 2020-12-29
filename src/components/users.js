import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Users = () => {

  const [users, setUsers] = useState([]);
  const usersUrl = process.env.REACT_APP_SERVICE_API_URL + '/users';

  const getUsers = async (setUsers) => {
    try {
      const users = await axios.get(usersUrl)
      setUsers(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getUsers(setUsers)
  }, [])

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Users
        </div>
        <div className="col-md-2 text-right">
          <Link to={"/addUser"}><h5 className="btn btn-outline-primary">Add User</h5></Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {users.map((user) => (
            <Link to={"/users/" + user.id}><h5 className="card-title">{user.username}</h5></Link>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Users