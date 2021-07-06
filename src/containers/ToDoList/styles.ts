import styled from 'styled-components';

export const OrderdList = styled.ol`
  width: 800px;
`;

export const ListItem = styled.li`
  max-width: 840px;
  padding: 1rem;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 0.3s;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 8px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ToDoItem = styled.p`
  max-width: 1024px;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  transition: transform 0.3s;
`;
