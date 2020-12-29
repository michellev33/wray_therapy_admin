import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

const UserAttempts = () => {
  
  const [attempts, setAttempts] = useState([]);
  const attemptsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' + useParams().id + '/attempts';
  const userUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' + useParams().id;
  
  const getAttempts = async (setAttempts) => {
    try {
      const attemptsList = await axios.get(attemptsUrl)
      setAttempts(attemptsList.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getAttempts(setAttempts)
  }, [])

  const options = {year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <div>
      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Progress Report
        </div>
        <div className="col-md-2 text-right">
          <Link to={"/users/" + useParams().id}><h5 class="btn btn-outline-primary">&laquo; back to user details</h5></Link>
        </div>
      </div>

      {attempts.map((attempt) => (
        <div className="card" key={attempt.id}>
          <div className="card-body">
            <Link to={"/users/" + attempt.userId + "/attempts/" + attempt.id}><h5 className="card-title">World: {attempt.world}</h5></Link>
            <h5>Date: {(new Date(attempt.date)).toLocaleString()}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default UserAttempts