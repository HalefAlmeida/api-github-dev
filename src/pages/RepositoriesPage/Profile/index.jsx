import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/38929215?v=4' alt='Profile Avatar' />
        <Login>halefalmeida</Login>
        <Name>Halef Almeida</Name>
      </Header>
    </Container>
  );
}
