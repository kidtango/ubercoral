import React, { Component } from 'react';

import {
  Box,
  Text,
  Card,
  Button,
  Heading,
  Mask,
  Sticky,
} from 'gestalt';

import { apiUrl } from '../utils/index';
import ToastMessage from '../toastMessages/ToastMessage';
import CoralCarousel from './carousel/CoralCarousel';


class WYSIWYG extends Component {
  state = {
    toastMessage: '',
    toast: false,
  }

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => {
      this.setState({ toast: false, toastMessage: '' });
    }, 2000);
  };

  render() {
    const { wysiwygs, addToCart } = this.props;
    const {
      toastMessage,
      toast,
    } = this.state;

    return (
      <React.Fragment>

        <Box margin={2}>
          {/* Heading Section */}
          <Heading size="sm" color="orange">
            WYSIWYG
          </Heading>
        </Box>
        <Sticky top={0}>
          <Box alignItems="center" display="flex">
            <ToastMessage show={toast} message={toastMessage} color="orange" />
          </Box>
        </Sticky>
        <Box
          wrap
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: '#bdcdd9',
            },
          }}
          shape="rounded"
          display="flex"
          justifyContent="center"
          padding={4}
          marginBottom={8}
        >
          {wysiwygs.map(coral => (
            <Box key={coral._id} padding={4} width={150} wrap>
              <Card
                image={(
                  <Box maxWidth={300} maxHeight={300}>
                    <Mask shape="rounded">
                      <img
                        alt="ubercoral.com"
                        src={`${apiUrl}${coral.image[0].url}`}
                        style={{ maxWidth: '100%', display: 'block' }}
                      />
                    </Mask>
                  </Box>
                )}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  direction="column"
                >
                  <Box marginBottom={2}>
                    <Text size="sm" bold align="center">
                      {coral.name.toUpperCase()}
                    </Text>
                  </Box>
                </Box>
                <Box margin={1}>
                  <Text size="sm" color="orange" align="center">
                    $
                    {coral.price.toFixed(2)}
                  </Text>
                </Box>

                <Button
                  size="sm"
                  accessibilityLabel="More Info"
                  color="blue"
                  text="Add To Cart"
                  onClick={() => { addToCart({ type: 'ADD_TO_CART', payload: coral }); this.showToast('Uber Coral added'); }}
                />

              </Card>
            </Box>

          ))}


          {/* <Box position="absolute" top left>

          </Box> */}


        </Box>

      </React.Fragment>
    );
  }
}

export default WYSIWYG;
