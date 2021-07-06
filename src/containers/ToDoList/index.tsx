import React from 'react';
import { OrderdList, ListItem, ToDoItem } from './styles';
interface ToDoListProps {
  toDoList: string[];
  // deleteTask: any;
  handleModal: any;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDoList, handleModal }) => {
  return (
    <OrderdList>
      {toDoList.map((toDo, i) => (
        <ListItem
          key={`${i}-${toDo}`}
          onClick={(event: any) => handleModal(event)}
        >
          <ToDoItem>{`${i + 1} -  ${toDo}`}</ToDoItem>
        </ListItem>
      ))}
    </OrderdList>
  );
};

export default ToDoList;
