import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Subscribers = () => {

  const [subscribers, setSubscribers] = useState([
  {
    "id": "Game Attempt 1",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 1,
    "date": "8/24/2020"
  },
  {
    "id": "Game Attempt 2",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 2,
    "date": "09/08/2020"
  },
  {
    "id": "Game Attempt 3",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 3,
    "date": "10/02/2020"
  },
  {
    "id": "Game Attempt 4",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 4,
    "date": "11/10/2020"
  }
  ]);

  function randomColor() // not implemented
  {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const subscribersUrl = 
      process.env.REACT_APP_SERVICE_API_CORS_PROXY + 
      process.env.REACT_APP_SERVICE_API_URL + '/subscribers';

  const getSubscribers = async (setSubscribers) => {
    try {
      const subscribers = await axios.get(
        subscribersUrl,
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.REACT_APP_SERVICE_API_ACCESS_TOKEN,
         },
        }
      )
      setSubscribers(subscribers.data.data);
      //console.log(subscribers.data.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getSubscribers(setSubscribers)
  }, [])

  return (
    <div>
      <center><h1>Progress Report</h1></center>
      <center><h2>Game Attempts</h2></center>
      {subscribers.map((subscriber) => (
        <div className="card" key={subscriber.id}>
          <div className="card-body">
            <Link to={"/subscribers/" + subscriber.id}><h5 className="card-title">{subscriber.world}</h5></Link>
            <h6 className="card-subtitle mb-2 text-muted">Level: {subscriber.level}</h6>
            <p className="card-text">{subscriber.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Subscribers