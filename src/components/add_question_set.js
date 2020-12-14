import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

class QuestionSets extends Component {
    state = {
      grade: "",
      subject: "",
      topic: ""
    };

    onGradeChange = e => {
      this.setState({
        grade: e.target.value
      });
    };
  
    onSubjectChange = e => {
      this.setState({
        subject: e.target.value
      });
    };

    onTopicChange = e => {
        this.setState({
          topic: e.target.value
        });
      };

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        grade: this.state.grade,
        subject: this.state.subject,
        topic: this.state.topic
      };
      axios
        .post(process.env.REACT_APP_SERVICE_API_URL + "/questionSets", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
      <div>
          <center><h1>Add Question Set</h1></center>
          <div className="post">
              <form className="post" onSubmit={this.handleSubmit}>
                  <input
                  placeholder="Grade" value={this.state.title}
                  onChange={this.onGradeChange} required
                  />
                  <input
                  placeholder="Subject" value={this.state.body}
                  onChange={this.onSubjectChange} required
                  />
                  <input
                  placeholder="Topic" value={this.state.body}
                  onChange={this.onTopicChange} required
                  />
                  <button type="submit">Create Question Set</button>
                </form>
            </div>
        </div>
      );
    }
  }

  export default QuestionSets