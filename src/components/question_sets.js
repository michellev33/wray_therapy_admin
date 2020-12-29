import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const QuestionSets = () => {

  const [questionSets, setQuestionSets] = useState([]);
  const questionSetsUrl = process.env.REACT_APP_SERVICE_API_URL + '/questionSets';

  const getQuestionSets = async (setQuestionSets) => {
    try {
      const questionSets = await axios.get(questionSetsUrl)
      setQuestionSets(questionSets.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getQuestionSets(setQuestionSets)
  }, [])

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Question Sets
        </div>
        <div className="col-md-2 text-right">
          <Link to={"/addQuestionSet"}><h5 class="btn btn-outline-primary">Add Question Set</h5></Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {questionSets.map((questionSet) => (
            <Link to={"/questionSets/" + questionSet.id}><h5 className="card-title">{questionSet.subject}: {questionSet.topic}</h5></Link>
          ))}
        </div>
      </div>
    </div>
  )

}

export default QuestionSets