import React from 'react';
import styled from 'styled-components';

const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
  
const StyledLink = styled(Link)`
  color: #ff5a5f;
  font-weight: normal;
  text-decoration: none;
`;

export default StyledLink;
