import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

const UserAttemptDetails = () => {

    const [attemptDetails, setAttemptDetails] = useState([]);
    const attemptDetailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' + useParams().id + '/attempts/' + useParams().attemptId;

    const attemptIndex = attemptDetailsUrl.lastIndexOf('/');
    const gameAttemptId = attemptDetailsUrl.substring(attemptIndex + 1);

    const getAttemptDetails = async (setAttemptDetails) => {
        try {
            const attempt = await axios.get(attemptDetailsUrl)
            setAttemptDetails(attempt.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    const [attempts, setAttempts] = useState([]);

    var currentAttempt = Object(attempts.find(attempt => attempt.id == gameAttemptId));

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
        getAttemptDetails(setAttemptDetails)
        getAttempts(setAttempts)
    }, [])

    function changeColor(val)
    {
        if (val == false)
        {
            var color = '#ffb3b3';
        }
        if (val == true)
        {
            var color = '#99ff99';
        }
        return color;
    }

    return (
      <div>

        <div className="row h1 p-4">
          <div className="col-md-10">
            <Link to={"/"}>WrayTherapy</Link> - Game Attempt: {gameAttemptId}
          </div>
          <div className="col-md-2 text-right">
            <Link to={"/users/" + useParams().id + "/attempts"}><h5 class="btn btn-outline-primary">&laquo; back to attempts list</h5></Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">

            <div style={{display: "flex"}}>

              <div style={{flexGrow: 1, marginLeft: 0}}>
                <strong>World</strong>: {currentAttempt.world}<br />
                <strong>Date</strong>: {(new Date(currentAttempt.date)).toLocaleString()}<br />
                <strong>Score</strong>: {currentAttempt.totalscore}/{attemptDetails.length}<br />
                <strong>Game Time</strong>: {currentAttempt.totaltime} sec<br />
              </div>
              
              <div style={{width: 1000}}>
                <div className="card" >
                  <div className="card-body">
                    <center><h4 className="card-text">Questions</h4></center>
                  </div>
                </div>
                {attemptDetails.map((attemptData) => (
                  <div className="card" key={attemptData.id}>
                    <div className="card-body">
                      <div style={{backgroundColor: changeColor(attemptData.correct)}} className="card-body">
                        <strong>Question ID</strong>: <Link to={"/questions/" + attemptData.questionId}>{attemptData.questionId}</Link><br />
                        <strong>Answer Selected</strong>: {attemptData.picked}<br />
                        <strong>Time</strong>: {attemptData.time} sec<br />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    )
};

export default UserAttemptDetails