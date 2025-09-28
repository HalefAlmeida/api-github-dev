import React from 'react';

import { Container, Selector, Cleaner } from './styles';

export default function Filter() {
  const languages = [
    { name: 'JavaScript', count: 10, color: '#b38f00ff' },
    { name: 'TypeScript', count: 8, color: '#058a00ff' },
    { name: 'Java', count: 7, color: '#0f1ef1ff' },
  ];

  const selectors = languages.map(({ name, color, count }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}
