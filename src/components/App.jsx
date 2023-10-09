import { Profile } from './Profile/profile';
import userData from '../data/user.json';

import { Statistics } from './Statistics/statictics';
import statisticksData from '../data/data.json';

import { FriendList } from './Friend-list/friend-list';
import friendsData from '../data/friends.json';

import { TransactionHistory } from './Transaction/transaction-history';
import transactinsData from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={statisticksData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactinsData} />;
    </>
  );
};
