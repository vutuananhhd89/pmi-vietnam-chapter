import React from 'react';
import styles from '../components/Page/Page.module.scss';

const AgileTalkPage = () => {
  return (
    <div className={styles['page']}>
      <div className={styles['page__inner']}>
        <h1 className={styles['page__title']}>Agile Talk</h1>
      </div>
    </div>
  );
};

export default AgileTalkPage;