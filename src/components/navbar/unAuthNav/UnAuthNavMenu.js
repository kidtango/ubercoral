import React, { Component } from 'react';
import {
  Box,
  Button,
  Layer,
  IconButton,
  Flyout,

} from 'gestalt';
import Signup from '../../auth/Signup';
import Signin from '../../auth/Signin';


class AuthNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this._handleClick.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
  }

  _handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }

  _handleDismiss() {
    this.setState(() => ({ open: false }));
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
                size={90}
              >
                <Box padding={1} alignContent="center" alignItems="center" alignSelf="center" flex="grow">
                  <Signin />
                  <Signup />

                  <Box marginTop={1}>
                    {' '}
                    <Button
                      text="FAQ"
                      color="blue"
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

export default AuthNavMenu;
