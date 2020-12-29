import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
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
          this.props.history.push("/questionSets")
          )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>

          <div className="row h1 p-4">
            <div className="col-md-10">
              <Link to={"/"}>WrayTherapy</Link> - Add Question Set
            </div>
            <div className="col-md-2 text-right">
              <Link to={"/questionSets"}><h5 class="btn btn-outline-primary">&laquo; back to question set list</h5></Link>
            </div>
          </div>

          <div className="post">
            <form className="post" onSubmit={this.handleSubmit}>
              <div className="card">
                <div className="card-body">

                  <div class="form-group">
                    <label className="h5">Grade</label>
                    <input className="form-control col-md-2"
                    placeholder="Grade" value={this.state.title}
                    onChange={this.onGradeChange} required
                    />
                  </div>

                  <div class="form-group">
                    <label className="h5">Subject</label>
                    <input className="form-control col-md-4"
                    placeholder="Subject" value={this.state.body}
                    onChange={this.onSubjectChange} required
                    />
                  </div>

                  <div class="form-group">
                    <label className="h5">Topic</label>
                    <input className="form-control col-md-6"
                    placeholder="Topic" value={this.state.body}
                    onChange={this.onTopicChange} required
                    />
                  </div>

                  <hr />
                  <div>
                    <button className="btn btn-primary" type="submit">Create Question Set</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  export default withRouter(QuestionSets);