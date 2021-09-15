import React, { useEffect, useState, useRef } from 'react';

import Expansible from '../Expansible';
import {
  Container,
  Left,
  Workplants,
  Select,
  Right,
  Avatar,
  Initials,
  AvatarContainer,
  BiggerAvatar,
  BiggerInitials,
  Username,
  Email,
  Logout
} from './styled';


const Header: React.FC = () => {
  const [initialsName, setInitialsName] = useState('');
  const [openAvatar, setOpenAvatar] = useState(false);

  const avatar = useRef();
  const username = 'Larissa Linda';

  const handleInitials = () => {
    const parts = username?.split(' ');
    let initials = '';
    for (let i = 0; i < 2; i++) {
      if (parts[i]?.length > 0 && parts[i] !== '') {
        initials += parts[i][0];
      }
    }
    setInitialsName(initials.toUpperCase());
  };

  useEffect(() => {
    handleInitials();
  });

  return (
    <Container>

      <Left>
        <Workplants>
          <Select defaultValue={0}>
            <option value={0} disabled>
              Luxottica - BR
            </option>
          </Select>
        </Workplants>
      </Left>

      <Right>

        <Expansible reference={avatar} open={openAvatar}>
          <AvatarContainer>
            <BiggerAvatar type="button">
              <BiggerInitials>{initialsName || ''}</BiggerInitials>
            </BiggerAvatar>
            <Username>Larissa Linda</Username>
            <Email>larissa.linda@email.com</Email>
            <Logout text="Logout" />
          </AvatarContainer>
        </Expansible>
        <Avatar type="button" onClick={() => setOpenAvatar(!openAvatar)}>
          <Initials>{initialsName || ''}</Initials>
        </Avatar>
      </Right>
    </Container>
  );
};

export default Header;
