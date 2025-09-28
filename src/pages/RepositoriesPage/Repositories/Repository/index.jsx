import React from 'react';

import { Container, Name, Description, Footer, Language, Link } from './styles';

function Repository() {
  return (
    <Container color='#f37272'>
      <Name>Repo Name</Name>
      <Description>Description</Description>
      <Footer color='#f37272'>
        <Language>Language</Language>
        <Link href='https://nortwest.com.br' target='_blank'>
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
