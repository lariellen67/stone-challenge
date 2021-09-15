import React from 'react';

import { Container, Content, Wrapper, Title, Close, CloseIcon } from './styled';

interface IExpansible {
  open: boolean;
  title?: string;
  close?: any;
  reference?: any;
  id?: string;
}

const Expansible: React.FC<IExpansible> = ({
  open,
  reference,
  title,
  close,
  children,
  id,
  ...rest
}) => (
    <Container toggle={open} ref={reference} id={id} {...rest}>
      <Content>
        <Wrapper>
          <Title>{title}</Title>
          {close && (
            <Close type="button" onClick={close}>
              <CloseIcon />
            </Close>
          )}
        </Wrapper>
        {children}
      </Content>
    </Container>
  );

export default Expansible;
