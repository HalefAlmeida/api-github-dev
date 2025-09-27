import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/images/github-mark-white.svg';

export default function Main() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt='GitHub Logo' />
      <Title>API GitHub</Title>

      <Form>
        <Input
          placeholder='Digite o nome do usuário do GitHub'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />

        <Button to={`/${login}/repositories`} disabled={!login.trim()}>
          <MdSearch size={42} color='white' />
        </Button>
      </Form>
    </Container>
  );
}
