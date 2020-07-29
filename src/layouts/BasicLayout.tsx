import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import { connect } from 'umi';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';
import { ConnectState, UserModelState } from '@/models/connect';
interface BasicLayoutProps extends ConnectState {
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  console.log('object', props);
  const { children, location, dispatch, user } = props;
  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({ type: 'user/fetchCurrent' });
    }
  }, []);

  // console.log('props', props);
  const { pathname } = location;
  const showBottomNav = pathname !== '/login';
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
