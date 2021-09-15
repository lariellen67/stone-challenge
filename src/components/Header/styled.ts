import {
  FaRegQuestionCircle,
  FaBell,
  FaBars,
  FaCog,
  FaGlobe,
  FaSlidersH,
  FaInfoCircle,
  FaSun,
  FaMoon
} from 'react-icons/all';

import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  grid-area: HD;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: ${props => props.theme.palette.LAYOUT.HEADER};
  padding: 0 10px 0 10px;

  .hamburger {
    display: none;
    border: 0;
    background-color: transparent;
  }

  svg {
    color: ${props => props.theme.palette.TEXT.CONTRAST_TWO};
  }

  @media only screen and (max-width: 978px) {
    .hamburger {
      display: inline;
    }
  }
`;

export const Hamburger = styled(FaBars).attrs({
  size: 25
})`
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 17px;
`;

export const Workplants = styled.div`
  margin: 7px 10px;
`;

export const Select = styled.select`
  padding: 10px 8px;
  border: 0;
  margin: 0 15px;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.theme.palette.TEXT.CONTRAST_ONE};
  color: ${props => props.theme.palette.TEXT.CONTRAST_TWO};
  font-size: 14px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const Right = styled.div`
  display: flex;
  align-self: center;
`;

export const Touchable = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  margin-right: 25px;
`;

export const Help = styled(FaRegQuestionCircle).attrs({
  size: 16
})`
  cursor: pointer;
`;

export const Notifications = styled(FaBell).attrs({
  size: 16
})`
  cursor: pointer;
`;

export const Avatar = styled.button`
  border: 0;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin-right: 5px;
  background-color: ${props => props.theme.palette.LAYOUT.AVATAR};
  cursor: pointer;
`;

export const Initials = styled.p`
  font-size: 19px;
  font-family: 'Roboto Medium', sans-serif;
  font-weight: 300px;
  color: ${props => props.theme.palette.LAYOUT.HEADER};
  opacity: 0.72;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BiggerAvatar = styled.button`
  border: 0;
  outline: none;
  align-self: center;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background-color: ${props => props.theme.palette.BACKGROUND.PROFILE};
  cursor: pointer;
`;

export const BiggerInitials = styled.p`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${props => props.theme.palette.LAYOUT.HEADER};
  opacity: 0.5;
`;

export const Username = styled.p`
  font-size: 14.5px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  word-break: break-all;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
  margin: 10px 0 7px 0;
`;

export const Email = styled.p`
  font-size: 11px;
  font-family: 'Roboto Light', sans-serif;
  text-align: center;
  word-break: break-all;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 40px 10px;
`;

export const Options = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;

  svg {
    color: ${props => props.theme.palette.TEXT.TERTIARY};
    opacity: 0.8;
  }
`;

export const OptionName = styled.p`
  font-size: 13.5px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
  opacity: 0.8;
  margin-left: 15px;
`;

export const Cog = styled(FaCog).attrs({
  size: 16
})`
  cursor: pointer;
`;

export const Globe = styled(FaGlobe).attrs({
  size: 15
})`
  cursor: pointer;
`;

export const Moon = styled(FaMoon).attrs({
  size: 15
})`
  cursor: pointer;
`;

export const Sun = styled(FaSun).attrs({
  size: 15
})`
  cursor: pointer;
`;

export const Adjust = styled(FaSlidersH).attrs({
  size: 15
})`
  cursor: pointer;
`;

export const Info = styled(FaInfoCircle).attrs({
  size: 15
})`
  cursor: pointer;
`;

export const Logout = styled(Button)`
  align-self: center;
`;

export const Space = styled.div`
  margin-bottom: 50px;
`;

export const NoInfo = styled.p`
  font-size: 13.5px;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.palette.TEXT.TERTIARY};
  opacity: 0.6;
`;
