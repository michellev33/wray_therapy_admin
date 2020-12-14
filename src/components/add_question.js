import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import QuestionSets from './add_question_set';

class Questions extends Component {
    /*state = {
      question: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      answer: "",
      questionSetId: []
    };*/

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            optionOne: "",
            optionTwo: "",
            optionThree: "",
            optionFour: "",
            answer: "",
            questionSetId: []
        }
    }

    async getOptions(){
        const res = await axios.get(process.env.REACT_APP_SERVICE_API_URL + "/questionSets")
        const data = Object(res.data)
    
        const options = data.map(d => ({
            "id" : d.id,
            "grade" : d.grade,
            "subject" : d.subject,
            "topic" : d.topic
        }))
        this.setState({questionSetId: options})
    }

    componentDidMount() {
        this.getOptions()
        /*axios.get(process.env.REACT_APP_SERVICE_API_URL + "/questionSets")
          .then(res => {
            const questionSets = Object(res.data);
            this.setState({ questionSets });
          })*/
      }

    onQuestionChange = e => {
      this.setState({
        question: e.target.value
      });
    };
  
    onOptionOneChange = e => {
      this.setState({
        optionOne: e.target.value
      });
    };

    onOptionTwoChange = e => {
        this.setState({
          optionTwo: e.target.value
        });
    };

    onOptionThreeChange = e => {
        this.setState({
          optionThree: e.target.value
        });
    };

    onOptionFourChange = e => {
        this.setState({
          optionFour: e.target.value
        });
    };

    onAnswerChange = e => {
        this.setState({
          answer: []
        });
    };

    /*onQuestionSetChange = e => {
        this.setState({
          questionSetId: e.target.value
        });
    };*/

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        question: this.state.question,
        optionOne: this.state.optionOne,
        optionTwo: this.state.optionTwo,
        optionThree: this.state.optionThree,
        optionFour: this.state.optionFour,
        answer: this.state.answer,
        questionSetId: this.state.questionSetId
      };
      axios
        .post(process.env.REACT_APP_SERVICE_API_URL + "/questions", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

   /* <ul>
    { this.state.questionSets.map(questionSet => <li>{questionSet.subject}</li>)}
    </ul> 
    <input
                    placeholder="Question Set" value={this.state.body}
                    onChange={this.onQuestionSetChange} required
                    /> */
  
    render() {
        return (
        <div>
            <center><h1>Add Question</h1></center>
            <div className="post">
                <form className="post" onSubmit={this.handleSubmit}>
                    <input
                    placeholder="Question" value={this.state.title}
                    onChange={this.onQuestionChange} required
                    />
                    <input
                    placeholder="Option One" value={this.state.body}
                    onChange={this.onOptionOneChange} required
                    />
                    <input
                    placeholder="Option Two" value={this.state.body}
                    onChange={this.onOptionTwoChange} required
                    />
                    <input
                    placeholder="Option Three" value={this.state.body}
                    onChange={this.onOptionThreeChange} required
                    />
                    <input
                    placeholder="Option Four" value={this.state.body}
                    onChange={this.onOptionFourChange} required
                    />
                    <input
                    placeholder="Answer" value={this.state.body}
                    onChange={this.onAnswerChange} required
                    />
                    <button type="submit">Create Question Set</button>
                  </form>
              </div>
          </div>
        );
      }
  }

  export default Questions