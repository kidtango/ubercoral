import React from 'react';
import {
  Box,
  Divider,
  TextField,
  Link,
  Column,
  Text,
  Icon,
  Container,
  Heading,

} from 'gestalt';
import { NavLink } from 'react-router-dom';
import Checkout from './Checkout';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import { getToken } from '../utils/index';

const CheckoutRedirect = () => (
  getToken().length !== 0 ? <Checkout /> : (
    <Container>
      {/* <Box padding={2}>
        <Box display="flex" direction="column" justifyContent="center" alignItems="center">
          <Box padding={1}>
            <Heading size="xs">Please Log in or sign up to checkout cart</Heading>
          </Box>
          <Box padding={1} display="flex">
            <Box padding={1}>
              <Signup />
            </Box>
            <Box padding={1}>
              <Signin />
            </Box>
          </Box>
        </Box>
      </Box> */}

      <Box display="flex" direction="row" paddingY={2}>
        <Column span={6}>
          <Box color="lightGray" padding={1} alignItems="center" justifyContent="center" alignContent="center">
            <Box align="center" color="white" paddingY={2}>
              <Heading size="xs" align="center">Returning Customer?</Heading>
              <Box padding={1}>
                <Text align="center">Please sign in by clicking on the button below</Text>
              </Box>

              <Box padding={4}>
                <Signin />
              </Box>
              <Box padding={2}>
                <Text> Note: If you are a registered DrsFosterSmith.com customer, you can use your existing user name and password.</Text>
              </Box>
              <Box padding={2}>
                <Text> If you forgot your password, click the "Forgot your password?" link for your hint. If you forgot your user name, try your email address. Many customers use their email address as their user name.</Text>
              </Box>
            </Box>
          </Box>
        </Column>
        <Column span={6}>
          <Box color="lightGray" padding={1}>
            <Box color="white" paddingY={2} align="center">
              <Heading size="xs" align="center">New Customer</Heading>

              <Box>
                <Text align="center">
                  Having an account with us means we store your profile on our secure server to make future visits fast, safe, and convenient.
                </Text>
              </Box>
              <Box padding={4}>
                <Signup />
              </Box>
            </Box>
          </Box>
        </Column>
      </Box>

    </Container>

  )
);

export default CheckoutRedirect;
