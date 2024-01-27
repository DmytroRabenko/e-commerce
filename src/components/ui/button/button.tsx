import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  color?: string;
  width?: string;
  customClass?: string;
 // isActive?: boolean    isActive,
}
const Button: React.FC<ButtonProps> = ({ children, icon, customClass, color, width, ...buttonProps }) => {
  
  //const buttonActive = !isActive ? s.inactiveButton: '';
  const buttonColor = color ? s[color] : '';
  const buttonWidth = width ? s[width] : '';
  const buttonCustomClass = customClass ? s[customClass] : '';
  return (
    <button
      className={`${s.button}  ${buttonColor} ${buttonWidth} ${buttonCustomClass}`}//${buttonActive}
      {...buttonProps}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
