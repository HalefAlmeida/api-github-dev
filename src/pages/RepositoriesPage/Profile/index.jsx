import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/38929215?v=4' alt='Profile Avatar' />
        <Login>halefalmeida</Login>
        <Name>Halef Almeida</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          NTW Software
        </Data>
        <Data>
          <MdLocationCity size={20} /> Umuarama, Brasil
        </Data>
        <Data>
          <MdLink size={20} /> <a href='https://nortwest.com.br'>https://nortwest.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
}
