import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

const UserDetail = () => {
  
  const [user, setUser] = useState({});
  const detailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' +  useParams().id;

  const getUser = async (setUser) => {
    try {
      const userDetails = await axios.get(detailsUrl)
      setUser(userDetails.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getUser(setUser)
  }, [])

  return (
    <div>
      <center><h1>User: {user.username}</h1></center>
      <div className="card">
        <div className="card-body">
          <Link to={"/users/" + user.id + "/attempts"}><h5 className="card-title">View game attempts</h5></Link>
        </div>
      </div>
    </div>
  )

}

export default UserDetail