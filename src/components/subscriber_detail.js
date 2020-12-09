import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const SubscriberDetail = () => {

  var listOfSubs = [
  {
    "id": "Game Attempt 1",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 1,
    "date": "8/24/2020",
    "Q1": "Question 1",
    "Q1S": "A",
    "Q1R": "MISSED",
    "Q1T": "00:03",
    "Q2": "Question 2",
    "Q2S": "B",
    "Q2R": "CORRECT",
    "Q2T": "00:08",
    "Q3": "Question 3",
    "Q3S": "C",
    "Q3R": "MISSED",
    "Q3T": "00:15",
    "Q4": "Question 4",
    "Q4S": "D",
    "Q4R": "MISSED",
    "Q4T": "00:10",
    "Q5": "Question 5",
    "Q5S": "D",
    "Q5R": "CORRECT",
    "Q5T": "00:01",
    "Q6": "Question 6",
    "Q6S": "A",
    "Q6R": "MISSED",
    "Q6T": "00:06",
    "Q7": "Question 7",
    "Q7S": "A",
    "Q7R": "MISSED",
    "Q7T": "00:12",
    "Q8": "Question 8",
    "Q8S": "A",
    "Q8R": "MISSED",
    "Q8T": "00:09",
    "Q9": "Question 9",
    "Q9S": "A",
    "Q9R": "CORRECT",
    "Q9T": "00:11",
    "Q10": "Question 10",
    "Q10S": "A",
    "Q10R": "CORRECT",
    "Q10T": "00:07",
    "score": 4,
    "tot_time": "82" // haven't accounted for walking in between questions
  },
  {
    "id": "Game Attempt 2",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 2,
    "date": "09/08/2020",
    "Q1": "Question 1",
    "Q1S": "C",
    "Q1R": "CORRECT",
    "Q1T": "00:10",
    "Q2": "Question 2",
    "Q2S": "A",
    "Q2R": "CORRECT",
    "Q2T": "00:06",
    "Q3": "Question 3",
    "Q3S": "D",
    "Q3R": "MISSED",
    "Q3T": "00:20",
    "Q4": "Question 4",
    "Q4S": "B",
    "Q4R": "CORRECT",
    "Q4T": "00:08",
    "Q5": "Question 5",
    "Q5S": "B",
    "Q5R": "CORRECT",
    "Q5T": "00:13",
    "Q6": "Question 6",
    "Q6S": "A",
    "Q6R": "CORRECT",
    "Q6T": "00:07",
    "Q7": "Question 7",
    "Q7S": "C",
    "Q7R": "MISSED",
    "Q7T": "00:18",
    "Q8": "Question 8",
    "Q8S": "A",
    "Q8R": "MISSED",
    "Q8T": "00:02",
    "Q9": "Question 9",
    "Q9S": "B",
    "Q9R": "CORRECT",
    "Q9T": "00:14",
    "Q10": "Question 10",
    "Q10S": "D",
    "Q10R": "MISSED",
    "Q10T": "00:09",
    "score": 6,
    "tot_time": "107"
  },
  {
    "id": "Game Attempt 3",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 3,
    "date": "10/02/2020",
    "Q1": "Question 1",
    "Q1S": "B",
    "Q1R": "CORRECT",
    "Q1T": "00:19",
    "Q2": "Question 2",
    "Q2S": "B",
    "Q2R": "CORRECT",
    "Q2T": "00:08",
    "Q3": "Question 3",
    "Q3S": "D",
    "Q3R": "MISSED",
    "Q3T": "00:04",
    "Q4": "Question 4",
    "Q4S": "A",
    "Q4R": "CORRECT",
    "Q4T": "00:21",
    "Q5": "Question 5",
    "Q5S": "A",
    "Q5R": "CORRECT",
    "Q5T": "00:11",
    "Q6": "Question 6",
    "Q6S": "C",
    "Q6R": "MISSED",
    "Q6T": "00:09",
    "Q7": "Question 7",
    "Q7S": "B",
    "Q7R": "MISSED",
    "Q7T": "00:13",
    "Q8": "Question 8",
    "Q8S": "A",
    "Q8R": "CORRECT",
    "Q8T": "00:01",
    "Q9": "Question 9",
    "Q9S": "D",
    "Q9R": "CORRECT",
    "Q9T": "00:16",
    "Q10": "Question 10",
    "Q10S": "D",
    "Q10R": "CORRECT",
    "Q10T": "00:10",
    "score": 7,
    "tot_time": "112",
  },
  {
    "id": "Game Attempt 4",
    "name": "Michelle",
    "world": "Space Quest",
    "level": 4,
    "date": "11/10/2020",
    "Q1": "Question 1",
    "Q1S": "A",
    "Q1R": "CORRECT",
    "Q1T": "00:10",
    "Q2": "Question 2",
    "Q2S": "D",
    "Q2R": "CORRECT",
    "Q2T": "00:11",
    "Q3": "Question 3",
    "Q3S": "A",
    "Q3R": "CORRECT",
    "Q3T": "00:04",
    "Q4": "Question 4",
    "Q4S": "B",
    "Q4R": "CORRECT",
    "Q4T": "00:08",
    "Q5": "Question 5",
    "Q5S": "C",
    "Q5R": "CORRECT",
    "Q5T": "00:17",
    "Q6": "Question 6",
    "Q6S": "C",
    "Q6R": "CORRECT",
    "Q6T": "00:09",
    "Q7": "Question 7",
    "Q7S": "D",
    "Q7R": "CORRECT",
    "Q7T": "00:06",
    "Q8": "Question 8",
    "Q8S": "A",
    "Q8R": "CORRECT",
    "Q8T": "00:14",
    "Q9": "Question 9",
    "Q9S": "B",
    "Q9R": "CORRECT",
    "Q9T": "00:05",
    "Q10": "Question 10",
    "Q10S": "D",
    "Q10R": "CORRECT",
    "Q10T": "00:12",
    "score": 10,
    "tot_time": "96"
  }];

  function changeColor(val)
  {
    for (var i = 0; i < listOfSubs.length; i++)
    {
      if (val == 'MISSED')
      {
        var color = '#FF6347';
      }
      if (val == 'CORRECT')
      {
        var color = '#90EE90';
      }
    }
    return color;
  }

  let { id } = useParams();
  var sub = listOfSubs.find(s => {return s.id === id});

  const [subscriber, setSubscriber] = useState(sub);

  const detailsUrl = 
    process.env.REACT_APP_SERVICE_API_CORS_PROXY + 
    process.env.REACT_APP_SERVICE_API_URL +
    '/subscribers/' +  useParams().id;

  const getSubscriber = async (setSubscriber) => {
    try {
      const subscriberDetails = await axios.get(
        detailsUrl,
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.REACT_APP_SERVICE_API_ACCESS_TOKEN,
         },
        }
      )
      setSubscriber(sub);
      //console.log(subscriberDetails.data.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getSubscriber(setSubscriber)
  }, [])

  return (
    <div style={{display: "flex"}}>
      <div style={{flexGrow: 1, marginLeft: 0}}>
        <center><h1 style={{fontWeight:'bold'}}>{subscriber.id}</h1></center>
        <h3>World: {subscriber.world}</h3>
        <h3>Level: {subscriber.level}</h3>
        <h3>Date: {subscriber.date}</h3>
        <h3>Score: {subscriber.score}/10</h3>
        <h3>Game Time: {subscriber.tot_time} sec</h3>
      </div>
      <div style={{width: 1000}}>
        <div className="card" >
          <div className="card-body">
          <center><h3 className="card-text">Questions</h3></center>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q1R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q1}: {subscriber.Q1R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q1S}</p>
            <p className="card-text">Time: {subscriber.Q1T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q2R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q2}: {subscriber.Q2R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q2S}</p>
            <p className="card-text">Time: {subscriber.Q2T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q3R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q3}: {subscriber.Q3R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q3S}</p>
            <p className="card-text">Time: {subscriber.Q3T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q4R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q4}: {subscriber.Q4R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q4S}</p>
            <p className="card-text">Time: {subscriber.Q4T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q5R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q5}: {subscriber.Q5R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q5S}</p>
            <p className="card-text">Time: {subscriber.Q5T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q6R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q6}: {subscriber.Q6R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q6S}</p>
            <p className="card-text">Time: {subscriber.Q6T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q7R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q7}: {subscriber.Q7R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q7S}</p>
            <p className="card-text">Time: {subscriber.Q7T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q8R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q8}: {subscriber.Q8R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q8S}</p>
            <p className="card-text">Time: {subscriber.Q8T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q9R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q9}: {subscriber.Q9R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q9S}</p>
            <p className="card-text">Time: {subscriber.Q9T}</p>
          </div>
        </div>
        <div className="card" >
          <div style={{backgroundColor: changeColor(subscriber.Q10R)}} className="card-body">
            <p style={{fontWeight:'bold'}} className="card-text">{subscriber.Q10}: {subscriber.Q10R}</p>
            <p className="card-text">Answer Selected: {subscriber.Q10S}</p>
            <p className="card-text">Time: {subscriber.Q10T}</p>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/split.js/dist/split.min.js"></script>
    </div>
  )

}

export default SubscriberDetail