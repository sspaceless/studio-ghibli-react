import logo from '../../ghibli-logo.webp';
import classes from './HeaderComponent.module.css';

const HeaderComponent = () => {
  return (
    <div className={classes['background-image']}>
      <img src={logo} alt="Studio Ghibli logo" />
    </div>
  );
};

export default HeaderComponent;
