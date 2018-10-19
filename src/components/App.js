import React, { Component } from 'react';
import {
  Box,
  Text,
  Container,
  Card,
  Avatar,
  Button,
  Heading,
  Image,
  Spinner,
} from 'gestalt';

import { Link } from 'react-router-dom';
import { Consumer } from '../context';

import './App.css';
import Loader from './Loader';


const apiUrl = process.env.API_URL || 'http://localhost:1337';
// const strapi = new Strapi(apiUrl);

const App = () => (
  <Consumer>
    {(value) => {
      const { coralTypes, wysiwygs, loadingWysiwyg } = value;


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
                <Box margin={2}>
                  {/* Heading Section */}
                  <Heading size="sm" color="orange">
                    WYSIWYG
                  </Heading>
                </Box>
                {/* Corals  */}
                {loadingWysiwyg ? <Loader />
                  : (
                    <Box
                      wrap
                      dangerouslySetInlineStyle={{
                        __style: {
                          backgroundColor: '#bdcdd9',
                        },
                      }}
                      shape="rounded"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      {wysiwygs.map(coral => (
                        <Box key={coral._id} padding={4} margin={1} width={150} wrap>
                          <Card
                            image={(
                              <Box height={120} width={120}>
                                <Image
                                  alt={coral.name}
                                  alignItems="center"
                                  naturalHeight={1}
                                  naturalWidth={1}
                                  fit="contain"


                                  src={`${apiUrl}${coral.image[0].url}`}
                                />
                              </Box>
                            )}

                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              direction="column"
                            >
                              <Box marginBottom={2}>
                                <Text size="sm" bold align="center">
                                  {coral.name.toUpperCase()}
                                </Text>
                              </Box>
                            </Box>
                            <Box margin={1}>
                              <Text size="sm" color="orange" align="center">
                                $
                                {coral.price.toFixed(2)}
                              </Text>
                            </Box>

                            <Button
                              size="sm"
                              accessibilityLabel="More Info"
                              color="blue"
                              text="Add To Cart"
                            />

                          </Card>


                        </Box>

                      ))}

                    </Box>
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
