import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Repository from './Repository';

function Repositories({ repositories, currentLanguage = undefined }) {
  const repos = repositories
    .filter(
      (repository) => currentLanguage === undefined || repository.language === currentLanguage,
    )
    .map((repository) => <Repository key={repository.id} repository={repository} />);

  return (
    <>
      <h1>Repositories</h1>
      <Container>{repos}</Container>
    </>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }),
  ).isRequired,
  currentLanguage: PropTypes.string,
};

Repositories.defaultProps = {
  currentLanguage: undefined,
};
export default Repositories;
