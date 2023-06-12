import classes from "./DateNow.module.css"

const DateNow = ({date}) => {
  return (
    <div className={classes.date__now}>
      {date.dayWeek}, {date.dateMonth} {date.month}
    </div>
  )
}

export default DateNow;