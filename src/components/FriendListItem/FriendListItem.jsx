import PropTypes from 'prop-types';

import { FriendItem, ItemAvatar, ItemOnLine, ItemName } from './StylesListItem';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <FriendItem>
      <ItemOnLine status={status.toString()} className="status" />
      <ItemAvatar src={avatar} alt={name} className="avatar" />
      <ItemName className="name">{name}</ItemName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
