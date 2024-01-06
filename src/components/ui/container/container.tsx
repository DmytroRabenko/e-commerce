import React from 'react';
import s from './container.module.scss';
import { ContainerProps } from '@/types/types';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
export default Container;
