import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import {Icons} from '@/components/ui/icons/icons';
import s from './button-icon.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  count?: string;
}

const ButtonIcon: React.FC<ButtonProps> = ({ children, icon, count, className, ...buttonProps }) => {
  return (
    <button className={`${s.button} ${className && s.className}`} {...buttonProps}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
      {count && <span className={s.count}>{count}</span>}
    </button>
  );
};

export default ButtonIcon;
