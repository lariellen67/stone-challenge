import styled from 'styled-components';

import welcome from '../../assets/welcome.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  display: flex;
  background: url(${welcome}) no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fcfcfc;
  width: 100%;
  height: 55px;
  max-height: 55px;
`;

export const Logo = styled.img`
  margin-left: 10px;
  height: 50px;
  max-height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  max-width: 250px;
  margin-right: 15px;
`;

export const MenuItem = styled.button`
  outline: none;
  background-color: transparent;
  border: 0;
  font-size: 15.3px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  padding-bottom: 5px;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #22b24c;
  }
`;
