import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import { Provider } from './context';

import App from './components/App';
import Signin from './components/Signin';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Corals from './components/collections/Corals';

const Root = () => (

  <Router>
    <React.Fragment>
      <Provider>
        <Navbar />
        <Switch>
          <Route component={App} exact path="/" />
          <Route component={Signin} path="/signin" />
          <Route component={Signup} path="/Signup" />
          <Route component={Checkout} path="/Checkout" />
          <Route component={Corals} path="/:coralType" />
        </Switch>
      </Provider>
    </React.Fragment>

  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
