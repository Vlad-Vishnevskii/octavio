import style from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loaderOverlay}>
      <div className={style.loader}></div>
    </div>
  );
};
