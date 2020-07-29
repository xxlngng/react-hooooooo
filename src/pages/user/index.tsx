import React, { useEffect } from 'react';
import styles from './index.less';
import { connect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import Header from './Header';
import MyList from './MyList';
import Logout from './Logout';

interface UserProps extends ConnectProps {
  user: UserModelState;
}
const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { name, icon } = user.detail;
  const logout = () => {
    dispatch({ type: 'user/logout' });
  };
  // console.log(user)
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(User);
