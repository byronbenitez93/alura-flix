import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>Desarrollado por Byron Benitez - 2024</Logo>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 15px;
  background-color:${({ theme }) => theme.body};
  color: #070707;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export default Footer;
