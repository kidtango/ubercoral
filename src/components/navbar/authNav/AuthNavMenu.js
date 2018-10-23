/* eslint-disable */
import React, { Component } from 'react';
import {
  Box,
  Button,
  Layer,
  IconButton,
  Flyout,
} from 'gestalt';
import { withRouter } from 'react-router-dom';
import { clearToken, clearCart } from '../../utils/index';


class AuthNavMenu extends Component {
  state = {
    open: false,
  }


  handleClick = () => {
    this.setState(() => ({ open: !this.state.open }));
  }

  handleDismiss = () => {
    this.setState(() => ({ open: false }));
  }

  handleSignOut = () => {
    clearToken();
    // clearCart();
    this.props.history.push(location.pathname);
  }

  render() {
    return (
      <Box>
        <div
          style={{ display: 'inline-block' }}
          ref={(c) => {
            this.anchor = c;
          }}
        >
          {/* <Button
            accessibilityExpanded={!!this.state.open}
            accessibilityHaspopup
            onClick={this.handleClick}
            text="Help"
          /> */}

          <IconButton
            accessibilityExpanded={!!this.state.open}
            accessibilityHaspopup
            icon="ellipsis"
            iconColor="gray"
            onClick={this.handleClick}
          />
        </div>
        {this.state.open
          && (
            <Layer>
              <Flyout
                anchor={this.anchor}
                idealDirection="down"
                size={100}
              >
                <Box padding={1} alignContent="center" alignItems="center" alignSelf="center" flex="grow">
                  <Box padding={1}>
                    <Button
                      text="FAQ"
                      color="blue"
                    />

                  </Box>

                  <Box padding={1}>
                    <Button
                      text="Log out"
                      inline
                      onClick={this.handleSignOut}
                    />

                  </Box>

                </Box>
              </Flyout>
            </Layer>
          )}
      </Box>
    );
  }
}

export default withRouter(AuthNavMenu);
