import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import { Location } from 'umi';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';
interface BasicLayoutProps {
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location } = props;
  useEffect(() => {
    // 获取用户基本信息
  }, []);
  const { pathname } = location;
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default BasicLayout;
