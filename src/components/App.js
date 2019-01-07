import React from 'react';
import {
  Box,
  Text,
  Container,
  Card,
  Avatar,
  Button,
} from 'gestalt';

import { Link } from 'react-router-dom';
import { Consumer } from '../context';
import WYSIWYG from './collections/WYSIWYG';

import './App.css';
import Loader from './Loader';
import { apiUrl } from './utils/index';


// const strapi = new Strapi(apiUrl);

const App = () => (
  <Consumer>
    {(value) => {
      const {
        coralTypes, wysiwygs, loadingWysiwyg, dispatch,
      } = value.state;
      return (
        <React.Fragment>
          <Container>
            {/* Coral Type Section */}
            <Box display="flex" justifyContent="center" marginBottom={2}>
              {/* Coral Heading */}
            </Box>
            {/* Coral Types */}
            <Box display="flex" justifyContent="around" wrap>
              {coralTypes.map(coral => (
                <Box key={coral._id} padding={2} column={10} width={250}>
                  <Card
                    image={(
                      <Box>
                        <Avatar
                          src={`${apiUrl}${coral.image.url}`}
                          name={coral.name}
                        />
                      </Box>
                    )}
                  >
                    <Text align="center" bold size="xl">
                      <Box paddingX={3} paddingY={2} color="transparent">
                        {coral.name.toUpperCase()}
                        {' '}
                        Corals
                      </Box>
                    </Text>
                    <Link to={`/${coral.name}`}>
                      <Button
                        accessibilityLabel="View Collection"
                        color="red"
                        text="View Collection"
                      />
                    </Link>
                  </Card>
                </Box>
              ))}
            </Box>
            {/* WYSIWYG begins */}
            <Box
              marginTop={4}
              padding={4}
              display="flex"
              justifyContent="center"
              alignItems="start"
              dangerouslySetInlineStyle={{
                __style: {
                  flexWrap: 'wrap-reverse',
                },
              }}
            >
              {/* Corals Section */}
              <Box display="flex" direction="column" alignItems="center">

                {/* Corals  */}
                {loadingWysiwyg ? <Loader />
                  : (
                    <WYSIWYG wysiwygs={wysiwygs} addToCart={dispatch} />
                  )
                }
              </Box>
            </Box>

            {/* WYSIWYG ends */}

          </Container>
        </React.Fragment>
      );
    }}
  </Consumer>
);

export default App;
