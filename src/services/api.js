import axios from 'axios';
import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepositories = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let languages = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      [],
    );

  delete languages.null;

  languages = Object.keys(languages)
    .map((language) => ({
      name: language,
      count: languages[language],
      color: langColors[language],
    }))
    .sort((a, b) => b.count - a.count);

  return languages;
};
