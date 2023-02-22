import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style-type: none;
`;

export const CastItem = styled.li`
  width: calc((100% - 15px) / 4);
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  box-shadow: 0px 0px 13px 1px #a39b9c;
`;

// export const MovieTitle = styled.p`
//   height: 40px;
//   margin-bottom: 5px;
//   text-align: center;
//   color: black;
//   font-weight: 700;
// `;

export const ActorImage = styled.img`
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
`;
