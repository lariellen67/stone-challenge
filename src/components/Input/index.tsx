import React, { InputHTMLAttributes, useRef } from 'react';

import { Container, Wrapper, Label, Mandatory, Content, Field } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mandatory?: boolean;
  style?: object;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  mandatory,
  style,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Wrapper>
        <Label>{label}</Label>
        {mandatory && <Mandatory>*</Mandatory>}
      </Wrapper>
      <Content style={style}>
        <Field ref={inputRef} placeholder={placeholder} {...rest} />
      </Content>
    </Container>
  );
};

export default Input;
