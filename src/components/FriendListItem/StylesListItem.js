import styled from 'styled-components';


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

export const ItemOnLine = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
`;

export const ItemAvatar = styled.img`
width: 50px;
height: 50px;`;

export const ItemName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;