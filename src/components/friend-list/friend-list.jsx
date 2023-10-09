import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';

import { List } from './list-styles';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
          className="item"
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
