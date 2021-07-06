import React, { useState } from 'react';
import AddToDo from '../containers/AddToDo';
import ToDoList from '../containers/ToDoList';

import initialToDo from '../constants';
import MyDialog from '../components/MyDialog';
import { dark } from '../styles/theme';
// import { useTheme } from 'styled-components';

interface HomeProps {
  setTheme?: React.Dispatch<
    React.SetStateAction<{
      colors: {
        background: string;
        text: string;
        primary: string;
      };
    }>
  >;
}

const Home: React.FC<HomeProps> = ({ setTheme }) => {
  const [toDoList, setToDoList] = useState(initialToDo);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState('');
  // const theme = useTheme();
  // console.log(theme);
  const deleteTask = (event: any) => {
    event.preventDefault();
    const taskToDelete = toDoList.indexOf(deleteTarget.split('-')[1].slice(1));
    const newToDoList = [
      ...toDoList.slice(0, taskToDelete),
      ...toDoList.slice(taskToDelete + 1),
    ];
    setToDoList(newToDoList);
    return setDeleteModal(false);
  };

  const handleModal = (event: any) => {
    event.preventDefault();
    setDeleteTarget(event.target.innerText);
    if (deleteModal) {
      return setDeleteModal(false);
    }
    return setDeleteModal(true);
  };

  return (
    <main className="Home">
      {deleteModal && (
        <MyDialog
          title="Delete Task"
          message="Are you sure to delete"
          onBackDrop={handleModal}
          onConfirm={deleteTask}
          onTarget={deleteTarget}
        />
      )}
      <button onClick={() => setTheme(dark)}>Dark</button>
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} handleModal={handleModal} />
    </main>
  );
};

export default Home;
