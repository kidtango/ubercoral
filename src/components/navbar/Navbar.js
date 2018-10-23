import React from 'react';


import { getToken } from '../utils/index';
import UnAuthNav from './unAuthNav/UnAuthNav';
import AuthNav from './authNav/AuthNav';

const Navbar = () => (
  getToken().length !== 0 ? <AuthNav /> : <UnAuthNav />
);


export default Navbar;
