import { Profile } from './profile/profile';
import userData from '../data/user.json';

import { Statistics } from './statistics/statictics';
import statisticksData from '../data/data.json';

import { FriendList } from './friend-list/friend-list';
import friendsData from '../data/friends.json';

import { TransactionHistory } from './transaction/transaction-history';
import transactinsData from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile users={userData} />
      <Statistics stats={statisticksData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactinsData} />;
    </>
  );
};
