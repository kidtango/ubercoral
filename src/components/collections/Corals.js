
/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  Card,
  Button,
} from 'gestalt';
import CoralsDetail from './CoralsDetail';
import { Consumer } from '../../context';


const apiUrl = process.env.API_URL || 'http://localhost:1337';


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

            {value => (
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
                      {coralType.toUpperCase()}
                      {' '}
                      Corals
                    </Heading>

                  </Box>
                  {/* Corals  */}
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
                    {value[coralType].map(coral => (
                      <React.Fragment>


                        <Box position="relative" key={coral._id} padding={4} margin={1} width={150} wrap>
                          <Card
                            image={(
                              <Box height={120} width={120}>
                                <Image
                                  alignItems="center"
                                  naturalHeight={1}
                                  naturalWidth={1}
                                  fit="contain"
                                  alt={coralType}

                                  src={`${apiUrl}${coral.display_image.url}`}
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


                            {/* Coral Detail */}
                            <CoralsDetail coral={coral}/>

                            {/* <Button
                              size="sm"
                              accessibilityLabel="More Info"
                              color="blue"
                              text="FRAG IT"
                              onClick={() => { this.CoralsDetail.handleToggleModal(); }}
                            /> */}

                          </Card>

                          {/* CoralsDetail modal section */}

                        </Box>


                      </React.Fragment>

                    ))}


                  </Box>

                </Box>

              </Box>


            )}


          </Consumer>
          

        </Container>

      </React.Fragment>
    );
  }
}


export default Corals;
