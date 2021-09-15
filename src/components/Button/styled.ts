import styled from 'styled-components';

export const Container = styled.button`
  border: 1px solid ${props => props.theme.palette.OTHERS.CLEAR_GREY};
  border-radius: 3px;
  background: transparent;
  outline: none;
  align-items: center;
  align-self: flex-start;
  padding: 8px 3px 8px 12px;
  cursor: pointer;
  display: flex;
  position: relative;

  &:hover .tooltip {
    visibility: visible;
  }

  svg {
    margin-right: 4px;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 90px;
  background-color: ${props => props.theme.palette.BACKGROUND.TOOLTIP};
  color: ${props => props.theme.palette.TEXT.CONTRAST_TWO};
  text-align: center;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  padding: 5px;
  left: 50%;
  margin-bottom: 10px;
  word-break: break-all;
  margin-left: -50px;
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

export const Text = styled.p`
  color: ${props => props.theme.palette.TEXT.TERTIARY};
  opacity: 0.8;
  margin-right: 9px;
`;
