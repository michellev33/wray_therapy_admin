import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
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
        .then(res => 
          console.log(res),
          this.props.history.push("/")
          )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
      <div>
          <center><h1>Add Question Set</h1></center>
          <div className="post">
              <form className="post" onSubmit={this.handleSubmit}>
                  <div className="card">
                    <div className="card-body">
                      <h5>Grade</h5>
                      <input
                      placeholder="Grade" value={this.state.title}
                      onChange={this.onGradeChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Subject</h5>
                      <input
                      placeholder="Subject" value={this.state.body}
                      onChange={this.onSubjectChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Topic</h5>
                      <input
                      placeholder="Topic" value={this.state.body}
                      onChange={this.onTopicChange} required
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit">Create Question Set</button>
                  </div>
                </form>
            </div>
        </div>
      );
    }
  }

  export default withRouter(QuestionSets);