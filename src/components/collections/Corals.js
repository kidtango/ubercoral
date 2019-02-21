/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Heading, Image, Container, Card, Mask } from 'gestalt';
import CoralsDetail from './CoralsDetail';
import { Consumer } from '../../context';
import Loader from '../Loader';

const apiUrl = process.env.API_URL || 'https://thecoralshop.herokuapp.com/';

class Corals extends Component {
  // handleDismiss = () => {
  //   this.setState(() => ({ open: false }));
  // }

  render() {
    const { coralType } = this.props.match.params;

    return (
      <React.Fragment>
        <Container>
          <Consumer>
            {context => {
              const { dispatch } = context.state;

              return (
                <Box
                  marginTop={4}
                  display='flex'
                  justifyContent='center'
                  alignItems='start'
                  dangerouslySetInlineStyle={{
                    __style: {
                      flexWrap: 'wrap-reverse'
                    }
                  }}
                >
                  {/* Corals Section */}
                  {context.state[`loading${coralType.toUpperCase()}`] ? (
                    <Loader />
                  ) : (
                    <Box display='flex' direction='column' alignItems='center'>
                      <Box margin={2}>
                        {/* Heading Section */}
                        <Heading size='sm' color='orange'>
                          {coralType.toUpperCase()} Corals
                        </Heading>
                      </Box>
                      {/* Corals  */}
                      <Box
                        wrap
                        dangerouslySetInlineStyle={{
                          __style: {
                            backgroundColor: '#bdcdd9'
                          }
                        }}
                        shape='rounded'
                        display='flex'
                        justifyContent='center'
                        padding={4}
                        marginBottom={8}
                      >
                        {context.state[coralType].map(coral => (
                          <Box
                            position='relative'
                            padding={4}
                            margin={1}
                            width={150}
                            wrap
                            key={coral._id}
                          >
                            <Card
                              image={
                                <Box maxWidth={300} maxHeight={300}>
                                  <Mask shape='rounded'>
                                    <img
                                      alt='ubercoral.com'
                                      src={`${apiUrl}${
                                        coral.display_image.url
                                      }`}
                                      style={{
                                        maxWidth: '100%',
                                        display: 'block'
                                      }}
                                    />
                                  </Mask>
                                </Box>
                              }
                            >
                              <Box
                                display='flex'
                                alignItems='center'
                                direction='column'
                              >
                                <Box marginBottom={2}>
                                  <Text size='sm' bold align='center'>
                                    {coral.name.toUpperCase()}
                                  </Text>
                                </Box>
                              </Box>
                              <Box margin={1}>
                                <Box align='center' margin={1}>
                                  <Text align='center'>
                                    {coral.quantity} Left
                                  </Text>
                                </Box>

                                <Text size='sm' color='orange' align='center'>
                                  ${coral.price.toFixed(2)}
                                </Text>
                              </Box>
                              {/* Coral Detail */}
                              <CoralsDetail
                                coral={coral}
                                addToCart={dispatch}
                              />
                            </Card>

                            {/* CoralsDetail modal section */}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              );
            }}
          </Consumer>
        </Container>
      </React.Fragment>
    );
  }
}

export default Corals;
