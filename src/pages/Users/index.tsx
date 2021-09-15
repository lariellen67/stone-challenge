import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import history from '../../routes/history';
import { selectors, getUsersRequest } from '../../store/modules/users/actions';
import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  UserContainer,
  UserCard,
  UserAvatar,
  UserInfo,
  Info
} from './styled';

const Users: React.FC = () => {
  const listUsers = useSelector(selectors.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" onClick={() => history.push('/')} />
        <Menu>
          <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
          <MenuItem onClick={() => history.push('/users')}>Usuários</MenuItem>
          <MenuItem onClick={() => history.push('/cards')}>Cartões</MenuItem>
          <MenuItem>Auditoria</MenuItem>
        </Menu>
      </Header>
      <UserContainer>
        {listUsers.map((item: any) => {
          const salaryBase = item?.salaryBase.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          });
          return (
            <UserCard key={item.id}>
              <UserAvatar
                src={`https://avatars.dicebear.com/api/avataaars/${item.salaryBase}.svg`}
                alt="avatar"
              />
              <UserInfo>
                <Info>Nome: {item.name ? item.name : ' -- '}</Info>
                <Info>Email: {item.email === '' ? ' -- ' : item.email}</Info>
                <Info>Documento: {item.document}</Info>
                <Info>Salário Base: {salaryBase}</Info>
              </UserInfo>
            </UserCard>
          );
        })}
      </UserContainer>
    </Container>
  );
};

export default Users;
