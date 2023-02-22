import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 10px;
  list-style-type: none;
`;

export const ReviewsItem = styled.li`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
