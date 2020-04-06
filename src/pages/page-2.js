import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import { Container } from '@components/global';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page.</h1>
      <p>Welcome to page 2. Also known as the second page.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default SecondPage;
