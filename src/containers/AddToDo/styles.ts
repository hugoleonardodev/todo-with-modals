import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 840px;
`;

export const Legend = styled.h1`
  color: #000000;
  padding: 1rem;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 1024px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
