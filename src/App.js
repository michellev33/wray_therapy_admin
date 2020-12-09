import React, {Component} from 'react';
import Subscribers from './components/subscribers';
import SubscriberDetail from './components/subscriber_detail';
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
          <Route exact path="/admin/subscribers" children={<Subscribers />} />
          <Route exact path="/admin/subscribers/:id" children={<SubscriberDetail />} />
        </Switch>
      </Router>
    )
  }

}

export default App;