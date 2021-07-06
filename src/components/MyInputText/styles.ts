import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
  font-size: 32px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 9px;
  transition: 0.2s ease;
  border-radius: 8px;
`;

export const Border = styled.span`
  border: 1px solid rgb(116, 132, 143);
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  pointer-events: none;
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  font-size: 32px;
  padding: 12px 12px 7px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  color: rgb(116, 132, 143);
  &:focus {
    outline: none;
  }
  &:focus ~ ${Label}, &:not([value='']) ~ ${Label} {
    top: -7px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
    background: #fff;
    padding: 0px 5px;
  }
  &:hover ~ ${Border} {
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    position: absolute;
    top: 0px;
    pointer-events: none;
    transition: all 0.1s ease;
  }
  &:focus ~ ${Border} {
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    position: absolute;
    top: 0px;
    pointer-events: none;
    transition: all 0.1s ease;
  }
`;
