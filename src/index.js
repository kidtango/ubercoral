import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import { Provider } from './context';
import { getToken } from './components/utils/index';

import App from './components/App';
import CheckoutUnauth from './components/checkout/CheckoutUnauth';
import Navbar from './components/navbar/Navbar';
import Corals from './components/collections/Corals';
import Footer from './components/footer/Footer';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//       getToken().length !== 0 ? <Component {...props} /> : (
//         <React.Fragment>
//           <Redirect to={{
//             pathname: '/',
//             state: { from: props.location },

//           }}
//           />
//         </React.Fragment>
//       )
//     )}
//   />
// );


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
