import React, { Component } from 'react';

import {
  Box,
  Divider,
  TextField,
  Link,
  Column,
  Text,
  Icon,
  Container,
  Button,
  Heading,
  IconButton,
  Label,
  TextArea,
  Switch,
  SelectList,


} from 'gestalt';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../../context';
import { calculatePrice } from '../utils/index';


const Checkout = () => {
  const cityOptions = [
    {
      value: 'visa',
      label: 'Visa',
    },
    {
      value: 'master',
      label: 'Master Card',
    },
    {
      value: 'Discover',
      label: 'Discover',
    },
    {
      value: 'Amex',
      label: 'American Express',
    },
  ];

  return (
    <Consumer>
      {(context) => {
        const { cartItems, dispatch } = context.state;

        return (
          <Container>
            {/* Shipping Address Section */}
            <Box display="flex" direction="row" paddingY={2}>
              <Column span={8}>
                <Box padding={1}>
                  <Box paddingY={2}>
                    <Heading size="sm" color="navy">Review & Finalize Order</Heading>
                  </Box>
                </Box>
              </Column>
              <Column span={4} />
            </Box>
            <Box display="flex" direction="row" paddingY={2}>
              <Column span={8}>
                <Box padding={1}>
                  <Box paddingY={2}>
                    <Box direction="row" display="flex">
                      <Box padding={1} marginRight={1}>
                        <Heading color="blue" size="xs" align="Left" bold>
                          Shipping Address
                        </Heading>
                      </Box>
                      <Box>
                        <IconButton icon="edit" />
                      </Box>
                    </Box>
                    <Divider />
                    <Box padding={1}>
                      <Text bold>Scott Tang</Text>
                      <Text>7918 Log Hollow Dr</Text>
                      <Text>Houston, TX</Text>
                      <Text>713-289-4229</Text>
                    </Box>
                  </Box>
                </Box>
              </Column>
              <Column span={4} />
            </Box>
            {/* Order summary heading */}
            <Box display="flex" direction="row" paddingY={2}>
              <Column span={8}>
                <Box padding={1}>
                  <Box paddingY={2}>
                    <Heading size="xs" color="blue">Order Summary</Heading>
                  </Box>
                </Box>
              </Column>
              <Column span={4} />
            </Box>

            {/* Order Summary Section */}
            <Box display="flex" direction="row" padding={2} marginBottom={4}>

              <Column span={9}>
                <Box color="lightWash" padding={1}>
                  <Box padding={3} color="blue">
                    <Text color="white" align="left">Next Day Air Shipping (FREE)</Text>
                  </Box>

                  {/* Cart Items section */}
                  {cartItems.map(item => (
                    <Box color="white" padding={3}>

                      <Box display="flex">
                        <Text align="left" color="orange" bold>
                          {' '}
                          {item.name}
                          {' '}
                        </Text>
                        <IconButton
                          accessibilityLabel="Delete Item"
                          icon="cancel"
                          size="xs"
                          iconColor="red"
                          onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item._id })}
                        />
                      </Box>
                      <Text align="left">
                        Item #:
                        {' '}
                        {item._id}
                      </Text>
                      <Text align="left">Ships from: Houston</Text>
                      <Text align="left">
                        Price: $
                        {item.price.toFixed(2)}
                      </Text>
                    </Box>
                  ))}
                  <Divider />
                  <Box color="blue" padding={3}>
                    <Text color="white" size="lg" align="left" bold>
                      Total:
                      {calculatePrice(cartItems)}
                    </Text>
                  </Box>
                </Box>
              </Column>
              <Column span={3} />
            </Box>

            {/* Payment section */}
            {/* Header */}
            <Box display="flex" direction="row">
              <Column span={8}>
                <Box padding={1}>
                  <Box paddingY={1}>
                    <Heading size="xs" color="blue">Payment Information</Heading>
                  </Box>
                </Box>
              </Column>
              <Column span={4} />
            </Box>
            {/* Payment Form */}
            <Box display="flex" direction="row" padding={1} marginBottom={8}>

              <Box display="flex" direction="row" position="relative">
                <Column span={12}>
                  <Box paddingY={2} paddingX={4} display="flex">
                    <Column span={2}>
                      <Label htmlFor="name">
                        <Text align="left" bold>
                          Name On Card
                        </Text>
                      </Label>
                    </Column>
                    <Column span={6}>
                      <TextField id="name" onChange={() => undefined} />
                    </Column>
                  </Box>

                  <Box paddingY={2} paddingX={4} display="flex">
                    <Column span={2}>
                      <Label htmlFor="Card Type">
                        <Text align="left" bold>
                          Card Type
                        </Text>
                      </Label>
                    </Column>
                    <Column span={6}>
                      <SelectList
                        id="city"
                        name="city"
                        // onChange={this.handleChange}
                        options={cityOptions}
                        placeholder="Select Payment Type"
                      // value={this.state.city}
                      />
                    </Column>
                  </Box>

                  <Box paddingY={2} paddingX={4} display="flex">
                    <Column span={2}>
                      <Label htmlFor="desc">
                        <Text align="left" bold>
                          Card Number
                        </Text>
                      </Label>
                    </Column>
                    <Column span={6}>
                      <TextField id="desc" onChange={() => undefined} />
                    </Column>
                  </Box>
                  <Box paddingY={2} paddingX={4} display="flex">
                    <Column span={2}>
                      <Label htmlFor="desc">
                        <Text align="left" bold>
                          Expiration Date
                        </Text>
                      </Label>
                    </Column>
                    <Column span={1}>
                      <TextField id="desc" onChange={() => undefined} />
                    </Column>
                    <Box padding={1}>
                      {' '}
                      <Text>/</Text>
                    </Box>
                    <Column span={2}>
                      <TextField id="desc" onChange={() => undefined} />
                    </Column>
                    <Box padding={1}><Text align="center">(Ex: 10/2018)</Text></Box>
                  </Box>

                </Column>

              </Box>


            </Box>


          </Container>
        );
      }}


    </Consumer>
  );
};


export default Checkout;
