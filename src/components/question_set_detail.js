import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

const QuestionSetDetail = () => {

  const [questionSet, setQuestionSet] = useState([]);
  const [questions, setQuestions] = useState([]);
  const detailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/questionSets/'  +  useParams().id;
  const history = useHistory();

  const getQuestionSet = async (setQuestionSet) => {
    try {
      const questionSetDetails = await axios.get(detailsUrl)
      setQuestionSet(questionSetDetails.data);
      setQuestions(questionSetDetails.data.questions);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getQuestions = async (setQuestions) => {
    try {
      const questions = getQuestionSet().questions;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getQuestionSet(setQuestionSet);
    getQuestions(setQuestions);
  }, [])

  const handleDeleteQuestionSet = e => {
    e.preventDefault();
    var confirmDelete = window.confirm('Do you really want to delete this question set?');
    if (confirmDelete) {
      axios
        .delete(detailsUrl)
        .then(res => 
          console.log("Deleted question set: ", res),
        )
        .then(() => 
          history.push("/questionSets"),
        )
        .catch(err => console.log(err));
    }
  };

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Question Set: {questionSet.id}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <strong>Subject</strong>: {questionSet.subject}<br />
          <strong>Topic</strong>: {questionSet.topic}<br />
          <strong>Grade</strong>: {questionSet.grade}<br />
          <hr />

          <strong>Questions</strong>:<br />
          {questions.map((question) => (
            <Link to={"/questions/" + question.id}><span className="pl-3">{question.question}</span><br /></Link>
          ))}
          <hr />

          <div className="row">
            <div className="col-md-2">
              <Link to={"/questionSets"}><h6 class="btn btn-outline-primary">&laquo; back to question set list</h6></Link>
            </div>
            <div className="col-md-10 text-right">
              <form className="post" onSubmit={handleDeleteQuestionSet}>
                <div>
                  <button className="btn btn-danger" type="submit">Delete this question set</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default QuestionSetDetail