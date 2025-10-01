import React from 'react';

import PropTypes from 'prop-types';
import { Container, Name, Description, Footer, Language, Link } from './styles';
import { langColors } from '../../../../services/config';

function Repository({ repository }) {
  const color = langColors[repository.language];
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Language>{repository.language}</Language>
        <Link href={repository.html_url} target='_blank'>
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};
export default Repository;
