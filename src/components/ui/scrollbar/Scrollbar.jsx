import classes from "./Scrollbar.module.css"

const Scrollbar = ({color, width}) => {

  return (
    <div className={classes.scrollbar}>
      <div style={{width: width + "%"}} className={classes.scrollbar__value + " " + classes[color]}></div>
    </div>
  )
}

export default Scrollbar;