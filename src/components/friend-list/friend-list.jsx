import PropTypes from 'prop-types';
import { List, FriendItem, Status, FriendImg } from './list-styles';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        const { avatar, name, isOnline } = item;
        return (
          <FriendItem key={item.id}>
            <FriendImg src={avatar} alt="User avatar" width="48"></FriendImg>
            <h2>{name}</h2>
            <Status $isOnline={isOnline}></Status>
          </FriendItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
