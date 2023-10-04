import styled from 'styled-components';

export const List = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #c0c0c0;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 20px;
  cursor: pointer;
  background-color: grey;
  width: 400px;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(82 60 60 / 39%),
    0.3em 0.3em 3em rgba(0, 0, 0, 0.3);
  margin: 10px;
`;

export const FriendImg = styled.img``;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
