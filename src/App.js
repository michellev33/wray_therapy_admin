import React, {Component} from 'react';
import Home from './components/home';
import QuestionSets from './components/add_question_set';
import Questions from './components/add_question';
import Users from './components/users';
import AddUser from './components/add_user';
import UserDetail from './components/user_detail';
import UserAttempts from './components/user_attempts';
import UserAttemptDetails from './components/user_attempts_detail';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/questionSets" children={<QuestionSets />} />
          <Route exact path="/questions" children={<Questions />} />
          <Route exact path="/users" children={<Users />} />
          <Route exact path="/addUser" children={<AddUser />} />
          <Route exact path="/users/:id" children={<UserDetail />} />
          <Route exact path="/users/:id/attempts" children={<UserAttempts />} />
          <Route exact path="/users/:id/attempts/:attemptId" children={<UserAttemptDetails />} />
        </Switch>
      </Router>
    )
  }

}

export default App;