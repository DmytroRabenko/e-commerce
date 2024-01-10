import React from 'react';
import s from './loading.module.scss';

const Loading = () => {
  return (
    <div className={s.container}>
      <div className={s.loading}></div>
    </div>
  );
};

export default Loading;
