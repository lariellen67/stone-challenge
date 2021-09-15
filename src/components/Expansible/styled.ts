import { MdClose } from 'react-icons/all';

import styled from 'styled-components';

interface IToggle {
  toggle: boolean;
}

export const Container = styled.div<IToggle>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.BACKGROUND.EXPANSIBLE};
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(100%)')};
  height: 100%;
  width: 20%;
  text-align: flex-end;
  position: fixed !important;
  z-index: 99;
  top: 0;
  right: 0;
  margin-top: 55px;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-in-out;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.04);
    background: rgba(204, 204, 204, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    border: 0px solid transparent !important;
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    border: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
  opacity: 0.8;
`;

export const Close = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose).attrs(props => ({
  ...props,
  size: 20,
  color: props.theme.palette.TEXT.TERTIARY
}))`
  opacity: 0.8;
`;
