import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  font-family: 'Permanent Marker', sans-serif;
  border-radius: 8px;
  margin-left: 1rem;
  display: flex;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  font-family: 'Material Icons';
  font-size: 56px;
  padding: 0.25rem;
`;

export const Children = styled.div`
  padding: 0.25rem;
`;
