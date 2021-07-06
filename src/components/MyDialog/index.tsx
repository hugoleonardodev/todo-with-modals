import React from 'react';

import {
  Container,
  BackDrop,
  Wrapper,
  Header,
  Title,
  Span,
  Body,
  Message,
  Footer,
} from './styles';
import MyButton from '../MyButton';

interface MyDialogProps {
  title?: string;
  message?: string;
  onTarget?: string;
  onBackDrop: (event: any) => void;
  onConfirm?: (event: any) => void;
}

const MyDialog: React.FC<MyDialogProps> = ({
  title,
  message,
  onTarget,
  onBackDrop,
  onConfirm,
}) => {
  return (
    <Container>
      <BackDrop onClick={(event: any) => onBackDrop(event)} />
      <Wrapper>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <Message>{message}</Message>
          {onTarget && <Span>{` ${onTarget}`}</Span>}
        </Body>
        <Footer>
          <MyButton handleCallback={onConfirm} icon="delete" />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default MyDialog;
