import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

const UserAttemptDetails = () => {

    const [attemptDetails, setAttemptDetails] = useState([]);
    const attemptDetailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/users/' + useParams().id + '/attempts/' + useParams().id;

    const gameAttemptId = attemptDetailsUrl.charAt(attemptDetailsUrl.length - 1);

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
            var color = '#FF6347';
        }
        if (val == true)
        {
            var color = '#90EE90';
        }
        return color;
    }
    
    return (
    <div style={{display: "flex"}}>
        <div style={{flexGrow: 1, marginLeft: 0}}>
            <center><h1>Game Attempt: {gameAttemptId}</h1></center>
            <h3>World: {currentAttempt.world}</h3>
            <h3>Date: {currentAttempt.date}</h3>
            <h3>Score: {currentAttempt.totalscore}/25</h3>
            <h3>Game Time: {currentAttempt.totaltime} sec</h3>
        </div>

        <div style={{width: 1000}}>
            <div className="card" >
                <div className="card-body">
                    <center><h3 className="card-text">Questions</h3></center>
                </div>
            </div>

        {attemptDetails.map((attemptData) => (
        <div className="card" key={attemptData.id}>
            <div className="card-body">
                <div style={{backgroundColor: changeColor(attemptData.correct)}} className="card-body">
                    <h3>Question Id: {attemptData.questionId}</h3>
                    <h3>Answer Selected: {attemptData.picked}</h3>
                    <h3>Time: {attemptData.time} sec</h3>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
    )
};

export default UserAttemptDetails