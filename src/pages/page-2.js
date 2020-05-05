import React from 'react';

import Layout from '@common/Layout';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    
    <Container>
      <h1>Hi from the second page.</h1>
      <p>Welcome to page 2. Also known as the second page.</p>
      <Link to="/#team">Go back to the homepage</Link>
    </Container>
    <Footer />
  </Layout>
);

export default SecondPage;
