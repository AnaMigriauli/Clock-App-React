import { Fragment, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { getAllTimezones } from "countries-and-timezones";
import sun from "../assets/mobile/Combined Shape 1.svg";
import arrowDown from "../assets/mobile/Group 3.svg";

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
  return (
    <Fragment>
      <div>
        <p>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <span>Ada Lovelace</span>
      </div>
      <div>
        <div>
          <img src={sun} alt="sun" />
          <p>GOOD MORNING</p>
        </div>
        <div>
          <div>{formattedTime}</div>
          <span></span>
        </div>
        <p>
          IN {currentCity}, {countryCode}
        </p>
        <div>
          <span>MORE</span>
          <img src={arrowDown} alt="arrow" />
        </div>
      </div>
    </Fragment>
  );
};
export default MainContainer;
