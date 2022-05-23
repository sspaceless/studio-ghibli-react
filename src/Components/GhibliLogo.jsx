import classes from './GhibliLogo.module.css';
import logo from '../ghibli-logo.webp';

const GhibliLogo = () => (
  <div className={classes['background-image']}>
    <img src={logo} alt="Studio Ghibli logo" />
  </div>
);

export default GhibliLogo;
