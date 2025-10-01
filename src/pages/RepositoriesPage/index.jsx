import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Sidebar, Main, Loading } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getLangsFrom, getRepositories, getUser } from '../../services/api';

export default function RepositoriesPage() {
  const { login } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepositories(login),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);

      setLanguages(getLangsFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}
