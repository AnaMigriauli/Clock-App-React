import { Fragment, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { getAllTimezones } from "countries-and-timezones";
import sun from "../assets/mobile/Combined Shape 1.svg";
import arrowDown from "../assets/mobile/Group 3.svg";
import arrowUp from "../assets/mobile/Group 5.svg";
import switchOnOff from "../assets/mobile/Combined Shape.svg";
import classes from "./MainContainer.module.css";
import day from "../assets/mobile/dayTime.svg";
import night from "../assets/mobile/nightTime.svg";
import CurrentTimeZone from "./TimeZoneInfo";

const MainContainer = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.local());
  const [hide, setHide] = useState(false);
  const [modeChange, setModeChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toFormat("HH:mm");
  const DayOfTheYear = currentTime.ordinal;
  const formattedDayOfWeek = currentTime.weekday;
  const weekNumber = currentTime.weekNumber;
  const currentTimeZone = currentTime.zoneName;
  const timeZone = currentTime.zoneName;
  const offsetName = currentTime.offsetNameLong
    .split(" ")
    .map((a) => a.slice(0, 1))
    .join("");
  const countryData = Object.values(getAllTimezones()).find(
    (timezone) => timezone.name === timeZone
  );
  const countryCode = countryData ? countryData.countries[0] : "";
  const currentCity = currentTimeZone.split("/").slice(-1);

  const getGreeting = () => {
    if (currentTime.hour >= 6 && currentTime.hour < 18) {
      return "Good Morning";
    } else {
      return "Good Evening";
    }
  };

  const dayContainerStyles = {
    backgroundImage: `url( ${day})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "375px",
    height: "667px",
    position: "relative",
  };
  const nightContainerStyles = {
    backgroundImage: `url( ${night})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "375px",
    height: "667px",
    position: "relative",
  };
  const modeChangeHandler = () => {
    setModeChange((prevState) => !prevState);
  };
  const openHandler = (e) => {
    setHide((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div
        style={modeChange ? nightContainerStyles : dayContainerStyles}
        className={classes.card}
      >
        <div className={classes.container}>
          <div className={hide ? classes.hidden : classes.header}>
            <div className={classes["title-container"]}>
              <p>
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </p>
              <span>Ada Lovelace</span>
            </div>
            <img
              className={classes.img}
              src={switchOnOff}
              alt=""
              onClick={modeChangeHandler}
            />
          </div>
          <div
            className={
              hide
                ? classes["data-container-slided"]
                : classes["data-container"]
            }
          >
            <div className={classes.dayNight}>
              <img src={sun} alt="sun" />
              <p>{getGreeting()}</p>
            </div>
            <div className={classes.time}>
              <div>{formattedTime}</div>
              <span>{offsetName}</span>
            </div>
            <span>
              IN {currentCity}, {countryCode}
            </span>
          </div>
          <div className={classes["switch-btn"]}>
            <span>{hide ? "LESS " : "MORE"}</span>
            <button
              onClick={(e) => {
                openHandler(e);
              }}
            >
              {hide ? (
                <img src={arrowDown} alt="arrow" />
              ) : (
                <img src={arrowUp} alt="arrow" />
              )}
            </button>
          </div>
          {hide ? (
            <CurrentTimeZone
              modeChange={modeChange}
              currentTimeZone={currentTimeZone}
              DayOfTheYear={DayOfTheYear}
              formattedDayOfWeek={formattedDayOfWeek}
              weekNumber={weekNumber}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default MainContainer;
