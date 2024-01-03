import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import {Icons} from '@/components/ui/icons/icons';
import s from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, icon, className, ...buttonProps }) => {
  return (
    <button className={`${s.button} ${className}`} {...buttonProps}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
