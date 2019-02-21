import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Modal,
  Spinner,
  Column,
  Layer
} from 'gestalt';

const apiUrl = process.env.API_URL || 'https://thecoralshop.herokuapp.com/';

const CoralCarousel = ({ images }) => (
  <Carousel showArrows>
    {images.map(image => (
      <div key={image._id}>
        <img src={`${apiUrl}${image.url}`} alt='coral' />
      </div>
    ))}
  </Carousel>
);

export default CoralCarousel;
