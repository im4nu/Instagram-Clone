import React from 'react';
import { Button, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
};

export function MainButton({ title, ...rest }: Props) {
  return (
    <Button {...rest}>
      <Text>{title}</Text>
    </Button>
  );
}
