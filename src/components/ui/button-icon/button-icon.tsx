'use client';
import { ButtonHTMLAttributes, ReactNode} from 'react';
import s from './button-icon.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  count?: number;
  customClass?: string;
  size?: string;
}

const ButtonIcon: React.FC<ButtonProps> = ({ children, icon, count, customClass, size, ...buttonProps }) => {
  return (
    <button className={`${s.button} ${customClass ? s[customClass] : ''} ${size ? s[size] : ''}`} {...buttonProps}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
      {count && count > 0 ? <span className={s.count}>{count}</span> : null}
    </button>
  );
};

export default ButtonIcon;
