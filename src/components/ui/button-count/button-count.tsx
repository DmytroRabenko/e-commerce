'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './button-count.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  count?: number;
  text?: string;
}

const ButtonCount: React.FC<ButtonProps> = ({ children, icon, count, text, ...buttonProps }) => {
  return (
    <button className={s.button} {...buttonProps}>
      <div className={s.row}>
        <span className={s.svg}>{children}</span>
        {count && count > 0 ? <span className={s.count}>({count})</span> : null}
      </div>
      {text && <span className={s.text}>{text}</span>}
    </button>
  );
};

export default ButtonCount;
