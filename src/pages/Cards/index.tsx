/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import chip from '../../assets/chip.png';
import logo from '../../assets/logo.png';
import history from '../../routes/history';
import { selectors, getCardsRequest } from '../../store/modules/cards/actions';
import useFormatDate from '../../utils/useFormatDate';
import {
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  CardContainer,
  Card,
  CardChip,
  CardInfo,
  Info
} from './styled';

const Cards: React.FC = () => {
  const listCards = useSelector(selectors.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsRequest());
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
      <CardContainer>
        {listCards.map((item: any) => {
          const limit = item?.metadatas.limit.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          });
          return (
            <Card key={item.id}>
              <CardChip src={chip} alt="chip" />
              <CardInfo>
                <Info>
                  Nome: {item.metadatas.name ? item.metadatas.name : ' -- '}
                </Info>
                <Info>Data de Emissão: {useFormatDate(item.createdAt)}</Info>
                <Info>Limite: {limit}</Info>
              </CardInfo>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Cards;
