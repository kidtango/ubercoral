import React from 'react';
import {
  Box,
  Text,
  Divider,
  Icon,
  SearchField,
  IconButton,
  Heading,
  Image,
} from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <Box
      display="flex"
      alignItems="center"
      height={70}
      padding={5}
      shape="square"
      color="white"
      justifyContent="around"
    >
      {/* Title and Logo */}
      <NavLink to="/">
        <Box display="flex" alignItems="center">
          <Box height={50} width={50} margin={2}>
            <Image
              src="./icons/logo.png"
              alt="TheCoralStore"
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
          {' '}
          <Heading size="xs" color="blue">
            UberCorals
          </Heading>
        </Box>
        {' '}
      </NavLink>
      {/* Search Field */}
      <Box
        color="white"
        shape="rounded"
        padding={3}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="end"
      >
        <Box padding={3} />
        <Box flex="grow" paddingX={2}>
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            // onChange={({ value }) => this.setState({ value })}
            placeholder="Find your corals"
          // value={this.state.value}
          />
        </Box>
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel="Notifications"
            icon="shopping-bag"
            size="md"
          />
        </Box>
        {/* Sign in Link */}
        <Box paddingX={2}>
          <NavLink to="/Signin">
            <Text size="xl">Sign In</Text>
          </NavLink>
        </Box>
      </Box>
    </Box>
    <Divider />
  </React.Fragment>
);

export default Navbar;
