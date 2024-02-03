import s from './title-h1.module.scss';

interface TitleH1Props {
  text: string;
  addStrong?: boolean;
}

const TitleH1: React.FC<TitleH1Props> = ({ text, addStrong }) => {
  return (
    <h1 className={s.title}>
      {text}
      {addStrong && <strong>Parfumerie.ua</strong>}
    </h1>
  );
};

export default TitleH1;
