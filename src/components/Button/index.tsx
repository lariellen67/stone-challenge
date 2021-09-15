import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Tooltip, Text } from './styled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: any;
  style?: object;
  tooltip?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconSize?: number;
  iconColor?: any;
  text?: string;
  textColor?: string;
}

const Button: React.FC<IButton> = ({
  ref,
  style,
  tooltip,
  icon: Icon,
  iconSize,
  iconColor,
  text,
  textColor,
  children,
  ...rest
}) => (
  <Container type="button" ref={ref} style={style} {...rest}>
    {tooltip && <Tooltip className="tooltip">{tooltip}</Tooltip>}
    {Icon && <Icon size={iconSize} color={iconColor} />}
    <Text color={textColor}>{text}</Text>
    {children}
  </Container>
);

export default Button;
