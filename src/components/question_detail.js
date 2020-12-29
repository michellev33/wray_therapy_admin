import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

const QuestionDetail = () => {

  const [question, setQuestion] = useState([]);
  const detailsUrl = process.env.REACT_APP_SERVICE_API_URL + '/questions/'  +  useParams().id;
  const history = useHistory();

  const getQuestion = async (setQuestion) => {
    try {
      const questionDetails = await axios.get(detailsUrl)
      setQuestion(questionDetails.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {      
    getQuestion(setQuestion)
  }, [])


  const handleDeleteQuestion = e => {
    e.preventDefault();
    var confirmDelete = window.confirm('Do you really want to delete this question?');
    if (confirmDelete) {
      axios
        .delete(detailsUrl)
        .then(res => 
          console.log("Deleted question: ", res),
        )
        .then(() => 
          history.push("/questions"),
        )
        .catch(err => console.log(err));
    }
  };

  return (
    <div>

      <div className="row h1 p-4">
        <div className="col-md-10">
          <Link to={"/"}>WrayTherapy</Link> - Question: {question.id}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5>Question Text: {question.question}</h5>
          <strong>Question Set ID</strong>: <Link to={"/questionSets/" + question.questionSetId}>{question.questionSetId}</Link><br />
          <strong>Options</strong>: {question.optionOne}, {question.optionTwo}, {question.optionThree}, {question.optionFour}<br />
          <strong>Answer</strong>: {question.answer}          
          <hr />
          <div className="row">
            <div className="col-md-2">
              <Link to={"/questions"}><h6 class="btn btn-outline-primary">&laquo; back to question list</h6></Link>
            </div>
            <div className="col-md-10 text-right">
              <form className="post" onSubmit={handleDeleteQuestion}>
                <div>
                  <button className="btn btn-danger" type="submit">Delete this question</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default QuestionDetail