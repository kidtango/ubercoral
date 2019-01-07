import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import { Provider } from './context';


import App from './components/App';
import CheckoutUnauth from './components/checkout/CheckoutRedirect';
import Navbar from './components/navbar/Navbar';
import Corals from './components/collections/Corals';
import Footer from './components/footer/Footer';


const Root = () => (

  <Router>
    <React.Fragment>
      <Provider>
        <Navbar />
        <Switch>
          <Route component={App} exact path="/" />
          <Route component={CheckoutUnauth} path="/checkout" />
          <Route component={Corals} path="/:coralType" />
        </Switch>
        <Footer />
      </Provider>
    </React.Fragment>

  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
