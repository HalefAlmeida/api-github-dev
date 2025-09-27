import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/images/github-mark-white.svg';

export default function Main() {
  return (
    <Container>
      <Logo src={githubLogo} alt='GitHub Logo' />
      <Title>API GitHub</Title>

      <Form>
        <Input placeholder='Digite o nome do usuário do GitHub' />
        <Button>
          <MdSearch size={42} color='white' />
        </Button>
      </Form>
    </Container>
  );
}
