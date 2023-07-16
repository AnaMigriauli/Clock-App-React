import classes from "./TimeZoneInfo.module.css";
const CurrentTimeZone = (props) => {
  return (
    <div
      className={
        props.modeChange
          ? classes["time-zone-info-dark"]
          : classes["time-zone-info-light"]
      }
    >
      <div>
        <span>CURRENT TIMEZONE</span>
        <h2>{props.currentTimeZone}</h2>
      </div>
      <div>
        <span>Day of the yeara</span>
        <h2>{props.DayOfTheYear}</h2>
      </div>
      <div>
        <span>Day of the week</span>
        <h2>{props.formattedDayOfWeek}</h2>
      </div>
      <div>
        <span>Week number</span>
        <h2>{props.weekNumber}</h2>
      </div>
    </div>
  );
};
export default CurrentTimeZone;
