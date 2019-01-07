import React from 'react';

import Checkout from './AuthCheckout';
import { getToken } from '../utils/index';
import UnAuthCheckout from './UnAuthCheckout';

const CheckoutRedirect = () => (
  getToken().length !== 0 ? <Checkout /> : <UnAuthCheckout />
);

export default CheckoutRedirect;
