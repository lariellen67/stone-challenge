import React from 'react';

import logo from '../../assets/logo.png';
import history from '../../routes/history';
import { Container, Header, Logo, Menu, MenuItem } from './styled';

const Main: React.FC = () => (
  <Container>
    <Header>
      <Logo src={logo} alt="logo" onClick={() => history.push('/')} />
      <Menu>
        <MenuItem onClick={() => history.push('/users')}>Usuários</MenuItem>
        <MenuItem onClick={() => history.push('/cards')}>Cartões</MenuItem>
        <MenuItem>Auditoria</MenuItem>
      </Menu>
    </Header>
  </Container>
);

export default Main;
