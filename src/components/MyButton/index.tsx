import React from 'react';

import { Button, Icon, Children } from './styles';

interface MyButtonProps {
  handleCallback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  handleCallback,
  icon,
}) => {
  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleCallback(e)
      }
    >
      {icon && <Icon>{icon}</Icon>}
      {children && <Children>{children}</Children>}
    </Button>
  );
};

export default MyButton;
