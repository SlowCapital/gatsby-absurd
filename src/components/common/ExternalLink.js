import React from 'react';
import styled from 'styled-components';

const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const ExternalLink = styled(Link)`
    color: blue;
    font-weight: normal;
  `;

export default ExternalLink;
