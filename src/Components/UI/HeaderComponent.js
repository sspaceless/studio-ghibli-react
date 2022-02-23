import classes from "./HeaderComponent.module.css";

const HeaderComponent = () => {
  return (
    <div className={classes["background-image"]}>
      <img
        src="https://u.kanobu.ru/editor/images/38/f776d3c9-329c-4cde-98de-1a9ca7a798bb.webp"
        alt="Studio Ghibli logo"
      />
    </div>
  );
};

export default HeaderComponent;
