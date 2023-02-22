import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Input = styled.input`
  width: 250px;
  padding: 3px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid greenyellow;
  }
`;
