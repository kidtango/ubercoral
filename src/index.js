import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import { Provider } from './context';

import App from './components/App';
import Checkout from './components/Checkout';
import Navbar from './components/navbar/Navbar';
import Corals from './components/collections/Corals';

const Root = () => (

  <Router>
    <React.Fragment>
      <Provider>
        <Navbar />
        <Switch>
          <Route component={App} exact path="/" />
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
