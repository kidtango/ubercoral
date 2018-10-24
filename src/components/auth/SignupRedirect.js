import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import ToastMessage from '../toastMessages/ToastMessage';
import { withRouter } from 'react-router-dom';

import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  TextField,
  Button,
  Modal,
  Layer,
  Link,
} from 'gestalt';

import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  TextField,
  Button,
  Modal,
  Layer,
  Link,
} from 'gestalt';

import React, { Component } from 'react'


class SignupRedirect extends Component {

  state = {
    showModal: false,
    password: '',
    email: '',
    toast: false,
    toastMessage: '',
    username: '',
    loading: true,
  }


  handleChange = ({ event, value }) => {
    event.persist();


    this.setState({ [event.target.name]: value })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}


export default SignupRedirect;