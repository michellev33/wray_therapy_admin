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
        <center><h1>Users</h1></center>
        <div className="card">
            <div className="card-body">
                <Link to={"/addUser"}><h5 className="card-title">Create new user</h5></Link>
            </div>
        </div>
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-body">
              <Link to={"/users/" + user.id}><h5 className="card-title">{user.username}</h5></Link>
            </div>
          </div>
        ))}
      </div>
    );
};


export default Users