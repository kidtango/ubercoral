import React from 'react';
import {
  Box,
  Divider,
  TextField,
  Link,
  Column,
  Text,
  Icon,


} from 'gestalt';
import { NavLink } from 'react-router-dom';


export default function footer() {
  const copy = '\u00A9';

  return (
    <React.Fragment>
      <Divider />
      <Divider />

      <Box
        display="flex"
        alignItems="center"
        height={100}
        padding={5}
        color="white"
        justifyContent="around"
        paddingY={4}
        wrap
      >
        {/* 1st column */}
        <Column span={4}>
          <Box paddingY={1} align="center" justifyContent="start" wrap>
            <Text align="center">GET CONNECTED</Text>
          </Box>
          <Box display="flex" direction="row" alignItems="center" align="center" justifyContent="center">
            <Box align="center" padding={1}>
              <Link href="https://pinterest.com"><Icon color="navy" icon="facebook" /></Link>
            </Box>
            <Box align="center" padding={1}>
              <Link href="https://pinterest.com"><Icon color="red" icon="pinterest" /></Link>
            </Box>
            <Box align="center" padding={1}>
              <Link href="https://pinterest.com"><Icon color="blue" icon="twitter" /></Link>
            </Box>
          </Box>
        </Column>

        {/* 2st column */}
        <Column span={4}>
          <Box paddingY={1} align="center" justifyContent="start" wrap>
            <Text align="center">HAVE A QUESTION?</Text>
          </Box>
          <Box display="flex" direction="row" alignItems="center" align="center" justifyContent="center">
            <Box align="center" padding={1}>
              <Link href="https://pinterest.com">
                <Icon icon="gmail" />
              </Link>
            </Box>
          </Box>
        </Column>

        {/* 1st column */}
        <Column span={4}>
          <Box paddingY={1} align="center" justifyContent="start" wrap>
            <Text align="center">NEWSLETTER</Text>
          </Box>
          <Box flex="grow" paddingX={2}>
            <TextField
              id="email"
              // onChange={this.handleChange}
              placeholder="Email Address"
              // value={this.state.value}
              type="email"
            />
          </Box>
        </Column>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        height={5}
        padding={5}
        justifyContent="around"
        paddingY={4}
        color="#f1f6f8"
      >
        <Text color="gray" size="xs">
          Copyright
          {' '}
          {copy}
          {' '}
          {new Date().getFullYear()}
          {' '}
          Uber Corals
        </Text>
      </Box>

    </React.Fragment>
  );
}
