import styles from './ButtonSubmit.module.scss';

export const ButtonSubmit = ({
  handlerSubmitButton,
  nameButton,
  isActive,
}) => {

  return (
    <button
      type="submit"
      disabled={!isActive}
      onClick={isActive ? handlerSubmitButton : null}
    >
      {nameButton}
    </button>
  );
};

export default ButtonSubmit;
