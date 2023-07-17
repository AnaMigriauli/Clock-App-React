import classes from "./Header.module.css";
import switchOnOff from "../assets/mobile/Combined Shape.svg";
const Header = (props) => {
  return (
    <div className={props.hide ? classes.hidden : classes.header}>
      <div className={classes["title-container"]}>
        <p>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <span>Ada Lovelace</span>
      </div>
      <img
        className={classes.img}
        src={switchOnOff}
        alt=""
        onClick={props.modeChangeHandler}
      />
    </div>
  );
};
export default Header;
