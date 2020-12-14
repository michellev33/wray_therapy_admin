import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

const UserAttempts = () => {
  
  const [attempts, setAttempts] = useState([]);
  const attemptsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' + useParams().id + '/attempts';
  
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

  return (
    <div>
      <center><h1>Progress Report</h1></center>
      <center><h2>Game Attempts</h2></center>
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