import PropTypes from 'prop-types';
import { Conteiner, List, Description, Avatar, Items } from './profile-style';

export const Profile = ({ avatar, username, tag, location, stats  }) => {
  return (
    <Conteiner>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <h2 className="name">{username}</h2>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      <List>
        <Items>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Items>
        <Items>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Items>
        <Items>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Items>
      </List>
    </Conteiner>
  );
};

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
