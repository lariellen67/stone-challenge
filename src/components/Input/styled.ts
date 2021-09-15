import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 3px;
  width: 163px;
  padding: 9px;
  margin: 0 8px 15px 0;
  border: 1px solid ${props => props.theme.palette.LAYOUT.INPUT};
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.p`
  font-size: 12.5px;
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
`;

export const Mandatory = styled.p`
  font-size: 12.5px;
  margin-left: 5px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
`;

export const Field = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  outline: none;
  color: ${props => props.theme.palette.TEXT.PRIMARY};

  &::placeholder {
    color: ${props => props.theme.palette.TEXT.PRIMARY};
    opacity: 0.4;
  }
`;
