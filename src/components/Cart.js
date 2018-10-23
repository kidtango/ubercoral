import React, { Component } from 'react';

import {
  Box,
  Text,
  Button,
  Heading,
  IconButton,
  Flyout,
  Layer,
  Divider,

} from 'gestalt';
import { Consumer } from '../context';

import { calculatePrice } from './utils/index';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this._handleClick.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
  }


  cartHasItemsIcon = (cartItems) => {
    if (cartItems.length !== 0) {
      return 'face-smiley';
    }
    return 'face-sad';
  }

  cartHasItemsColor = (cartItems) => {
    if (cartItems.length !== 0) {
      return 'blue';
    }
    return 'gray';
  }

  _handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }

  _handleDismiss() {
    this.setState(() => ({ open: false }));
  }


  render() {
    return (

      <Consumer>
        {(context) => {
          const { cartItems, dispatch } = context.state;

          return (
            <Box>
              <div
                style={{ display: 'inline-block' }}
                ref={(c) => {
                  this.anchor = c;
                }}
              >
                <Box>
                  <IconButton
                    accessibilityExpanded={!!this.state.open}
                    accessibilityHaspopup
                    onClick={this.handleClick}
                    text="Help"
                    icon={this.cartHasItemsIcon(cartItems)}
                    iconColor={this.cartHasItemsColor(cartItems)}
                  />
                </Box>

              </div>
              {this.state.open
                && (
                  <Layer>
                    <Flyout
                      anchor={this.anchor}
                      idealDirection="down"
                      onDismiss={this.handleDismiss}
                      positionRelativeToAnchor
                      size="lg"


                    >
                      <Box margintop={2} padding={3}>
                        <Box display="flex" direction="column" alignItems="center" padding={2}>
                          <Heading align="center" padding={1} size="sm">
                            Shopping Cart
                          </Heading>

                          <Divider />

                          <Text italic color="gray" align="center">
                            {cartItems.length}
                            {' '}
                            item(s) selected
                          </Text>

                          {/* Cart Items will be added */}
                          {cartItems.map(item => (
                            <Box key={item._id} display="flex" alignItems="center" padding={1}>

                              <Text color="orange" size="sm" bold>
                                {item.name}
                                :
                              </Text>
                              {' '}
                              ...
                              {' '}
                              <Text size="sm">
                                {item.quantity}
                                {' '}
                                --
                                {' '}
                                $
                                {(item.quantity * item.price).toFixed(2)
                                }
                              </Text>
                              <IconButton
                                accessibilityLabel="Delete Item"
                                icon="cancel"
                                size="xs"
                                iconColor="red"
                                onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item._id })}
                              />

                            </Box>
                          ))}

                          <Box display="flex" alignItems="center" justifyContent="center" direction="column">
                            <Box margin={2}>
                              {cartItems.length === 0 && (
                                <Text color="red">Please select some items</Text>
                              )}

                            </Box>
                            <Text size="lg">
                              Total:
                              {' '}
                              {calculatePrice(cartItems)}
                            </Text>
                          </Box>

                          <Box marginTop={3}>
                            <Button size="sm" align="center" color="red" text="Checkout" />
                          </Box>
                        </Box>
                      </Box>
                    </Flyout>
                  </Layer>
                )}
            </Box>
          );
        }
        }
      </Consumer>

    );
  }
}


export default Cart;
