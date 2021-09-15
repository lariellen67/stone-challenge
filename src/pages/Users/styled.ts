import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: #dcf4e3;
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
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 290px;
  max-width: 290px;
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

export const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 10px 10px 20px;
`;

export const UserCard = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  width: 280px;
  height: 90px;
  max-width: 280px;
  max-height: 90px;
  margin-right: 15px;
  background-color: #22b24c;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const UserAvatar = styled.img`
  height: 45px;
  max-height: 45px;
  border-radius: 30px;
  align-self: center;
  background-color: #fff;
  border: 1px solid #7eea9d;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  max-width: 230px;
  width: 230px;
  margin-left: 5px;
`;

export const Info = styled.p`
  font-family: 'Roboto Light', sans-serif;
  max-width: 30ch;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.7);
`;
