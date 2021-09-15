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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 10px 10px 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-direction: column;
  width: 280px;
  height: 150px;
  max-width: 280px;
  max-height: 150px;
  margin-right: 15px;
  background-color: #004033;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CardChip = styled.img`
  height: 35px;
  width: 40px;
  max-height: 35px;
  max-width: 40px;
  margin-left: 5px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  max-width: 270px;
  width: 270px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  font-family: 'Roboto Light', sans-serif;
  max-width: 40ch;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.7);
`;
