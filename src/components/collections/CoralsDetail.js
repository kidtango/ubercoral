import React, { Component } from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  Modal,
  Column,
  Layer,
  Divider,

} from 'gestalt';

import ToastMessage from '../toastMessages/ToastMessage';
import CoralCarousel from './carousel/CoralCarousel';


// const apiUrl = process.env.API_URL || 'http://localhost:1337';


class CoralsDetail extends Component {
  state = {
    showModal: false,
    hasLoaded: false,
    toastMessage: '',
    toast: false,
  }


  handleToggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal, hasLoaded: false }));
  }

  handWaitList = () => {
    this.handleToggleModal();
    this.showToast('Please Sign In To Be Waitlisted');
  }

  handleLoad = () => {
    this.setState({ hasLoaded: true });
  }

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => {
      this.setState({ toast: false, toastMessage: '' });
    }, 2000);
  };


  render() {
    const {
      showModal,
      toastMessage,
      toast,
    } = this.state;

    const { coral, addToCart } = this.props;

    return (

      <Box marginLeft={-1} marginRight={-1} position="relative" display="flex" wrap>
        <Box padding={1}>
          {coral.quantity ? (
            <Button
              text="FRAG ME"
              color="blue"
              onClick={this.handleToggleModal}
            />
          ) : (
            <Button
                text="WAITLIST ME"
                color="blue"
                onClick={this.handWaitList}
                color="red"
              />
          )}


          {showModal && (
            <Layer>
              <Modal

                accessibilityCloseLabel="close"
                size="lg"
                accessibilityModalLabel="View random images"
                heading={coral.name}
                onDismiss={this.handleToggleModal}
                footer={(
                  <Box display="flex" direction="column" justifyContent="center" wrap>
                    <Box
                      align="center"
                      color="transparent"
                      size="sm"
                    >
                      <ToastMessage show={toast} message={toastMessage} color="orange" />
                    </Box>


                    {coral.quantity ? (
                      <Button
                        size="lg"
                        text="ADD TO CART"
                        color="blue"
                        onClick={() => { addToCart({ type: 'ADD_TO_CART', payload: coral }); this.showToast('Uber Coral Added'); }
                        }
                      />
                    ) : (
                      <Button size="lg" text="WAITLIST ME" color="red" onClick={this.handleToggleModal} />
                    )}
                  </Box>

                )}
                size="lg"
              >

                {/* Main Contents */}
                <Box display="flex" direction="row" key={coral._id} wrap>
                  <Column span={8}>

                    <Box height={500} width={500} alignContent="center" alignItems="start" paddingX={1} margin={1}>

                      <CoralCarousel images={coral.secondary_images} />

                    </Box>

                  </Column>

                  <Column span={4}>
                    <Box
                      height="100%"
                      padding={1}
                      justifyContent="center"
                      alignItems="start"
                    >
                      {/* <Text color="white">{coral.description}</Text> */}

                      <Box margin={2} align="center" display="flex" wrap>
                        <Heading bold size="sm" align="center" color="orange">
                          $
                          {coral.price.toFixed(2)}
                        </Heading>
                      </Box>
                      <Divider />
                      <Box align="center" padding={4}>
                        <Text bold align="center">{coral.description}</Text>
                      </Box>


                    </Box>
                  </Column>

                </Box>
                {/* Main Contents Ends */}

              </Modal>

            </Layer>

          )}
        </Box>
      </Box>

    );
  }
}


export default CoralsDetail;
