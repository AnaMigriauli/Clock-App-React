import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { getAllTimezones } from "countries-and-timezones";
import sun from "../assets/mobile/Combined Shape 1.svg";
import arrowDown from "../assets/mobile/Group 3.svg";
import switchOnOff from "../assets/mobile/Combined Shape.svg";
import classes from "./MainContainer.module.css";
import backroundImg from "../assets/mobile/dayTime.svg";
const MainContainer = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.local());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const formattedTime = currentTime.toFormat("HH:mm");
  console.log(formattedTime);

  // const DayOfTheYear = currentTime.ordinal;
  // const formattedDayOfWeek = currentTime.weekday;
  // const weekNumber = currentTime.weekNumber;
  const currentTimeZone = currentTime.zoneName;
  const timeZone = currentTime.zoneName;
  const countryData = Object.values(getAllTimezones()).find(
    (timezone) => timezone.name === timeZone
  );
  const countryCode = countryData ? countryData.countries[0] : "";

  const currentCity = currentTimeZone.split("/").slice(-1);
  const containerStyles = {
    backgroundImage: `url(${backroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "375px",
    height: "667px",
    position: "relative",
  };
  return (
    <div style={containerStyles} className={classes.card}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes["title-container"]}>
            <p>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <span>Ada Lovelace</span>
          </div>
          <img className={classes.img} src={switchOnOff} alt="" />
        </div>
        <div className={classes["data-container"]}>
          <div className={classes.dayNight}>
            <img src={sun} alt="sun" />
            <p>GOOD MORNING</p>
          </div>
          <div>
            <div className={classes.time}>{formattedTime}</div>
            <span></span>
          </div>
          <span>
            IN {currentCity}, {countryCode}
          </span>
        </div>
        <div className={classes["switch-btn"]}>
          <span>MORE</span>
          <img src={arrowDown} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
