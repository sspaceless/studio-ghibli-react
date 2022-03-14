import classes from "./HeaderComponent.module.css";
import logo from "./img/ghibli-logo.webp"

const HeaderComponent = () => {
  return (
    <div className={classes["background-image"]}>
      <img
        src={logo}
        alt="Studio Ghibli logo"
      />
    </div>
  );
};

export default HeaderComponent;
