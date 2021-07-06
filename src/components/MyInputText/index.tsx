import React, { SetStateAction, Dispatch } from 'react';
import { Border, Container, Input, Label } from './styles';

interface MyInputTextProps {
  name: string;
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  rest?: any;
}

const MyInputText: React.FC<MyInputTextProps> = ({ name, task, setTask }) => {
  return (
    <Container>
      <Input
        type="text"
        name={name}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Border />
      <Label htmlFor={name}>{name}</Label>
    </Container>
  );
};

export default MyInputText;
