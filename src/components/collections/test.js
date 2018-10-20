<Box
                  display="flex"
                  direction="column"
                  justifyContent="left"
                  alignItems="left"
                  padding={1}
                >
                  <Column span={4}>
                    {/* <Spinner
                    accessibilityLabel="random image"
                    show={!hasLoaded}
                  /> */}

                    <Box height={250} width={250} alignContent="left" alignItems="start">
                      <Image

                        naturalHeight={1}
                        naturalWidth={1}
                        fit="contain"
                        alt={coral.name}

                        src={`${apiUrl}${coral.display_image.url}`}
                      />
                    </Box>
                    <Box height={250} width={250} alignContent="left" alignItems="start">
                      <Image

                        naturalHeight={1}
                        naturalWidth={1}
                        fit="contain"
                        alt={coral.name}

                        src={`${apiUrl}${coral.display_image.url}`}
                      />
                    </Box>
                    <Box height={250} width={250} alignContent="left" alignItems="start">
                      <Image

                        naturalHeight={1}
                        naturalWidth={1}
                        fit="contain"
                        alt={coral.name}

                        src={`${apiUrl}${coral.display_image.url}`}
                      />
                    </Box>

                  </Column>
                </Box>