import React, { Component } from 'react';
import Select from 'react-select';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

class AddQuestion extends Component {

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
          this.props.history.push("/questions")
          )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      this.getOptions()
    }
  
    render() {
        return (
        <div>

          <div className="row h1 p-4">
            <div className="col-md-10">
              <Link to={"/"}>WrayTherapy</Link> - Add Question
            </div>
            <div className="col-md-2 text-right">
              <Link to={"/questions"}><h5 class="btn btn-outline-primary">&laquo; back to question list</h5></Link>
            </div>
          </div>

            <div className="post">
                <form className="post" onSubmit={this.handleSubmit}>
                  <div className="card">
                    <div className="card-body">
                      <div class="form-group">
                        <label className="h5">Question</label>
                        <input className="form-control"
                        placeholder="Question" value={this.state.title}
                        onChange={this.onQuestionChange} required
                        />
                      </div>

                      <div class="form-group">
                        <label className="h5">Option One</label>
                        <input className="form-control col-md-6"
                        placeholder="Option One" value={this.state.body}
                        onChange={this.onOptionOneChange} required
                        />
                      </div>

                      <div class="form-group">
                        <label className="h5">Option Two</label>
                        <input className="form-control col-md-6"
                        placeholder="Option Two" value={this.state.body}
                        onChange={this.onOptionTwoChange} required
                        />
                      </div>
    
                      <div class="form-group">
                        <label className="h5">Option Three</label>
                        <input className="form-control col-md-6"
                        placeholder="Option Three" value={this.state.body}
                        onChange={this.onOptionThreeChange} required
                        />
                      </div>
       
                      <div class="form-group">
                        <label className="h5">Option Four</label>
                        <input className="form-control col-md-6"
                        placeholder="Option Four" value={this.state.body}
                        onChange={this.onOptionFourChange} required
                        />
                      </div>

                      <div class="form-group">
                        <label className="h5">Answer</label>
                        <input className="form-control col-md-6"
                        placeholder="Answer" value={this.state.body}
                        onChange={this.onAnswerChange} required
                        />
                      </div>

                      <div class="form-group">
                        <label className="h5">Question Set</label>
                        <Select options = {this.state.questionSetId} onChange={this.onQuestionSetChange.bind(this)}/>
                      </div>

                      <hr />
                      <div>
                        <button className="btn btn-primary" type="submit">Create Question</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        );
      }
  }

  export default withRouter(AddQuestion);