/* eslint-disable */
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

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class Signin extends React.Component {


  state = {
    showModal: false,
    password: '',
    toast: false,
    toastMessage: '',
    email: '',
    loading: true,
  }

  handleChange = ({ event, value }) => {
    event.persist();


    this.setState({ [event.target.name]: value })
  }

  handleToggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  handleSumbit = async e => {
    e.preventDefault()

    const { email, password, showModal } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Please fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true })
      const res = await strapi.login(email, password)
      this.setState({ loading: false, showModal: !showModal })
      this.props.history.push(location.pathname);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  }



  isFormEmpty = ({ email, password }) => {
    return !email || !password;
  }

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => {
      this.setState({ toast: false, toastMessage: '' })
    }, 5000);
  }

  render() {
    const { loading, showModal, toast, toastMessage, password, email } = this.state;
    return (
      <Box marginLeft={-1} marginRight={-1}>
        <Box padding={1}>
          <Button
            text="Log in"
            color="blue"
            onClick={this.handleToggleModal}
          />
          {showModal && (
            <Layer>
              <Container>
                <Modal
                  accessibilityCloseLabel="close"
                  accessibilityModalLabel="Sign in"
                  heading={
                    <Box>
                      <Box display="flex" alignItems="center" align="center" justifyContent="center">
                        <Box height={50} width={50} margin={2}>
                          <Image
                            src="./icons/logo.png"
                            alt="TheCoralStore"
                            naturalHeight={1}
                            naturalWidth={1}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Heading size="xs">Log in to order some Uber Corals</Heading>
                      </Box>
                    </Box>
                  }
                  size="sm"

                  onDismiss={this.handleToggleModal}

                  footer={
                    <Box display="flex" direction="row" justifyContent="center" alignItems="center">
                      <Box>
                        <Text align="center">Log in to access UC's exclusive deals</Text>
                        <Text align="center" wash italic size="xs">By continuing, you agree to UC's Terms of Service, Privacy Policy</Text>
                        <Link href="#"><Text bold size="md" align="center">Already a member? Log in</Text></Link>
                        <Box>
                          <ToastMessage color={"orange"} show={toast} message={toastMessage} />
                        </Box>
                      </Box>
                    </Box>
                  }
                  size="md"
                >
                  <form onSubmit={this.handleSumbit}>
                    <Box padding={2}>
                      <Box display="flex" direction="column" justifyContent="center" alignItems="center">
                        <Box padding={1}>
                        </Box>
                        <Box padding={1}>
                          <TextField
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            type="email"
                            onChange={this.handleChange}
                          />
                        </Box>
                        <Box padding={1}>
                          <TextField
                            id="password "
                            name="password"
                            placeholder="Password"
                            value={password}
                            type="password"
                            onChange={this.handleChange}
                          />
                          <Box padding={2} />


                          <Button color="red" size="md" disable={loading} text="Continue" type="submit" onSubmit={this.handleToggleModal} />
                        </Box>

                      </Box>
                    </Box>
                  </form>
                </Modal>
              </Container>
            </Layer>
          )}
        </Box>
      </Box>
    );
  }
}

export default withRouter(Signin);