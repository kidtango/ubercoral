import React, { Component } from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Modal,
  Spinner,
  Column,
  Layer,
} from 'gestalt';

import CoralCarousel from './carousel/CoralCarousel';


const apiUrl = process.env.API_URL || 'http://localhost:1337';


class CoralsDetail extends Component {
  constructor(props) {
    super(props);
    this.handleToggleModal = this._handleToggleModal.bind(this);
    this.handleLoad = this._handleLoad.bind(this);
    this.state = {
      showModal: false,
      hasLoaded: false,
    };
  }

  _handleToggleModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal, hasLoaded: false }));
  }

  _handleLoad() {
    this.setState({ hasLoaded: true });
  }

  render() {
    const { hasLoaded, showModal } = this.state;
    const { coral } = this.props;

    return (

      <Box marginLeft={-1} marginRight={-1} position="relative">
        <Box padding={1}>
          <Button
            text="Add To Cart"
            color="blue"
            onClick={this.handleToggleModal}
          />

          {showModal && (
            <Layer>
              <Modal

                accessibilityCloseLabel="close"
                accessibilityModalLabel="View random images"
                heading={coral.name}
                onDismiss={this.handleToggleModal}
                footer={(
                  <Box display="flex" direction="row" justifyContent="end">
                    <Button size="lg" text="Cancel" onClick={this.handleToggleModal} />
                  </Box>
                )}
                size="lg"
              >

                {/* Main Contents */}
                <Box display="flex" direction="row">
                  <Column span={4}>

                    <Box height={400} width={400} alignContent="left" alignItems="start" paddingX={1}>

                      <CoralCarousel images={coral.secondary_images} />

                      {/* <Image

                        naturalHeight={1}
                        naturalWidth={1}
                        fit="cover"
                        alt={coral.name}

                        src={`${apiUrl}${coral.display_image.url}`}
                      /> */}

                    </Box>

                  </Column>

                  <Column span={8}>
                    <Box height="100%" padding={1}>
                      {/* <Text color="white">{coral.description}</Text> */}

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
