import React, { useState, SetStateAction, Dispatch } from 'react';
import MyInputText from '../../components/MyInputText';
import MyButton from '../../components/MyButton';
import MyDialog from '../../components/MyDialog';

import { Form, Legend, FieldSet } from './styles';

interface AddToDoProps {
  toDoList: string[];
  setToDoList: Dispatch<SetStateAction<string[]>>;
}

const AddToDo: React.FC<AddToDoProps> = ({ toDoList, setToDoList }) => {
  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleToDoList = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (task.length === 0) {
      return setError(true);
    }
    return setToDoList([task, ...toDoList]);
  };

  const handleError = (event: any) => {
    event.preventDefault();
    return setError(!error);
  };

  return (
    <Form>
      <Legend>To Do Tasks with Modals</Legend>
      <FieldSet>
        <MyInputText name="addToDo" task={task} setTask={setTask} />
        <MyButton handleCallback={handleToDoList} icon="task" />
      </FieldSet>

      {error && (
        <MyDialog
          title="Error"
          message="Task is empty!"
          onConfirm={handleError}
          onBackDrop={handleError}
        />
      )}
    </Form>
  );
};

export default AddToDo;
