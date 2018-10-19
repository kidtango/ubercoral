import React, { Component } from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Modal,
} from 'gestalt';


class CoralsDetail extends Component {
  constructor(props) {
    super(props);
    this.handleToggleModal = this._handleToggleModal.bind(this);
    this.state = {
      showModal: false,
    };
  }

  _handleToggleModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  render() {
    const { showModal } = this.state;
    return (
      <Box marginLeft={-1} marginRight={-1}>
        {/* <Box padding={1}>
          <Button
            text="View padding"
            onClick={this.handleToggleModal}
          /> */}
        {showModal && (
          <Modal
            accessibilityCloseLabel="close"
            accessibilityModalLabel="View default padding and styling"
            heading="Heading"
            onDismiss={this.handleToggleModal}
            footer={(
              <Box color="gray">
                <Heading size="sm">Footer</Heading>
              </Box>
            )}
            size="md"
          >
            <Box color="gray" height={400}>
              <Heading size="sm">Children</Heading>
            </Box>
          </Modal>
        )}
      </Box>
      // </Box>
    );
  }
}


export default CoralsDetail;
