import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  color?: string;
  width?: string;
  customClass?: string;
}
const Button: React.FC<ButtonProps> = ({ children, icon, customClass, color, width, ...buttonProps }) => {
  return (
    <button
      className={`${s.button}  ${customClass ? s[customClass] : ''} ${color ? s[color] : ''} ${width ? s[width] : ''}`}
      {...buttonProps}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
