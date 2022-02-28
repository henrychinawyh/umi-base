import { memo } from 'react';
import styles from './index.less';

const First = memo((props) => {
  console.log(props);

  return <div className={styles.box}>123</div>;
});

export default First;
