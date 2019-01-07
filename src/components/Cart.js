import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
  state = {
    open: false,
  }


  cartHasItemsIcon = (cartItems) => {
    if (cartItems.length !== 0) {
      return 'face-smiley';
    }
    return 'face-sad';
  }

  cartHasItemsColor = (cartItems) => {
    if (cartItems.length !== 0) {
      return 'green';
    }
    return 'red';
  }

  handleClick = () => {
    this.setState(() => ({ open: !this.state.open }));
  }

  handleDismiss = () => {
    this.setState(() => ({ open: false }));
  }


  render() {
    const { open } = this.state;
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
              {open
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

                          {/* Cart Items */}
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
                            <NavLink to="/checkout">
                              <Button size="sm" align="center" color="red" text="Checkout" />
                            </NavLink>
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
