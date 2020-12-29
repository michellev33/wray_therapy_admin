import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Questions = () => {

  const [questions, setQuestions] = useState([]);
  const questionsUrl = process.env.REACT_APP_SERVICE_API_URL + '/questions';

  const getQuestions = async (setQuestions) => {
    try {
      const questions = await axios.get(questionsUrl)
      setQuestions(questions.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getQuestions(setQuestions)
  }, [])

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Questions
        </div>
        <div className="col-md-2 text-right">
          <Link to={"/addQuestion"}><h5 class="btn btn-outline-primary">Add Question</h5></Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {questions.map((question) => (
            <Link to={"/questions/" + question.id}><h5 className="card-title">{question.question}</h5></Link>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Questions