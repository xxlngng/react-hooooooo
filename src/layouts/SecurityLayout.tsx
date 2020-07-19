import React, { useEffect } from 'react';
import { connect, Redirect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({ user, children }) => {
  useEffect(() => {}, []);
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登陆
    return (
      <Redirect
        to={{ pathname: 'login', state: { from: location.pathname } }}
      />
    );
  }
  return <div>1111</div>;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
