import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Questions extends Component {

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
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.id,
            "label" : "Grade: " + d.grade + ", Subject: " + d.subject + ", Topic: " + d.topic
        }))
        this.setState({questionSetId: options})
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
          answer: e.target.value
        });
    };

    onQuestionSetChange(e){
        this.setState({
          questionSetId: e.value
        });
    };

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
        .then(res => 
          console.log(res),
          this.props.history.push("/")
          )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.getOptions()
    }
  
    render() {
        return (
        <div>
            <center><h1>Add Question</h1></center>
            <div className="post">
                <form className="post" onSubmit={this.handleSubmit}>
                  <div className="card">
                    <div className="card-body">
                      <h5>Question</h5>
                      <input
                      placeholder="Question" value={this.state.title}
                      onChange={this.onQuestionChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Option One</h5>
                      <input
                      placeholder="Option One" value={this.state.body}
                      onChange={this.onOptionOneChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Option Two</h5>
                      <input
                      placeholder="Option Two" value={this.state.body}
                      onChange={this.onOptionTwoChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Option Three</h5>
                      <input
                      placeholder="Option Three" value={this.state.body}
                      onChange={this.onOptionThreeChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Option Four</h5>
                      <input
                      placeholder="Option Four" value={this.state.body}
                      onChange={this.onOptionFourChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Answer</h5>
                      <input
                      placeholder="Answer" value={this.state.body}
                      onChange={this.onAnswerChange} required
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5>Question Set</h5>
                      <Select options = {this.state.questionSetId} onChange={this.onQuestionSetChange.bind(this)}/>
                    </div>
                  </div>
                  <div>
                    <button type="submit">Create Question</button>
                  </div>
                  </form>
              </div>
          </div>
        );
      }
  }

  export default withRouter(Questions);